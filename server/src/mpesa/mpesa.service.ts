import { BadRequestException, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import * as moment from 'moment';
import axios from 'axios';
import { response } from 'express';
import StkPushDTO from './dto/stkPush.dto';
import Mpesa from "./entity/mpesa.entity"
import { PhoneNumberUtil } from './phone-number.util';

@Injectable()
export class MpesaService {
    constructor(
        @InjectRepository(Mpesa)
        private readonly mpesaRepository: Repository<Mpesa>,
        private configService: ConfigService,
    ) { }

    getAll() {
        return "hey all";
    }

    private async generateStkPassword(timestamp: string): Promise<string> {
        const businessShortCode = this.configService.get('MPESA_BUSINESS_SHORT_CODE');
        const passKey = this.configService.get('MPESA_PASS_KEY');
        return Buffer.from(businessShortCode + passKey + timestamp).toString('base64');
    }

    private async generateTimestamp(): Promise<string> {
        return moment().format("YYYYMMDDHHmmss");
    }

    async lipaNaMpesaStkPush(
        stkPushData: StkPushDTO,
        token: string,
        //  user: User
    ) {
        const { phoneNumber, tourId, amount } = stkPushData
        const formattedPhoneNumber = PhoneNumberUtil.formatPhoneNumber(phoneNumber);
        const timeStamp = await this.generateTimestamp();
        const stkPassword = await this.generateStkPassword(timeStamp);
        const businessShortCode = this.configService.get('MPESA_BUSINESS_SHORT_CODE');
        let headers = {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
        const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
        const requestBody = {
            "BusinessShortCode": businessShortCode,
            "Password": stkPassword,
            "Timestamp": timeStamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": amount,
            "PartyA": formattedPhoneNumber,
            "PartyB": businessShortCode,
            "PhoneNumber": formattedPhoneNumber,
            "CallBackURL": "https://xpwf9k2s-3000.uks1.devtunnels.ms/payments/callback",
            "AccountReference": "Wanderlust Exproler",
            "TransactionDesc": "Payment of tour booking"
        }
        try {
            const { data } = await axios.post(url, requestBody, { headers })
            if (data.ResponseCode === "0") {
                // return ("😀 Request is successful done ✔✔. Please enter mpesa pin to complete the transaction")
                return data
            }
        } catch (error) {
            if (response.status(400)) {
                throw new BadRequestException("Invalid input")
            }
            throw new HttpException("Can not process your request", HttpStatus.NOT_ACCEPTABLE)
        }


    }

    async handleMpesaCallback(request: any, token: string) {
        const resultCode = request.body.Body.stkCallback.ResultCode;

        if (resultCode === 0) {
            // extract the transaction details from the callback body
            const callbackMetadata = request.body.Body.stkCallback.CallbackMetadata.Item;

            const mpesaTransaction = {
                transactionDate: callbackMetadata[3].Value,
                payingPhoneNumber: callbackMetadata[4].Value,
                MpesaReceiptNumber: callbackMetadata[1].Value,
                paidAmount: callbackMetadata[0].Value,
                merchantRequestId: request.body.Body.stkCallback.MerchantRequestID,
                checkoutRequestID: request.body.Body.stkCallback.CheckoutRequestID,
            };
            // save a transaction to the database
            // implement the transaction queery
            console.log(mpesaTransaction)
            // send a success response to Safaricom
            return {
                token, // Return token received from middleware
                checkoutRequestID: mpesaTransaction.checkoutRequestID,
            };
        } else {
            return {
                ResponseCode: `${resultCode}`,
                ResponseDesc: 'fail',
            };
        }
    }

    async stkQuery(token: string, checkoutRequestID: string) {
        const timeStamp = await this.generateTimestamp();
        const stkPassword = await this.generateStkPassword(timeStamp);
        const businessShortCode = this.configService.get('MPESA_BUSINESS_SHORT_CODE');
        const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query'

        const requestBody = {
            BusinessShortCode: businessShortCode,
            Password: stkPassword,
            Timestamp: timeStamp,
            CheckoutRequestID: checkoutRequestID,
        };
        const headers = {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        };

        try {
            const { data } = await axios.post(url, requestBody, { headers });
            if (data.ResultCode === '0') {
                return {
                    ResponseCode: "0",
                    ResponseDescription: "The service request has been accepted successfully",
                    MerchantRequestID: data.MerchantRequestID,
                    CheckoutRequestID: data.CheckoutRequestID,
                    ResultCode: "0",
                    ResultDesc: "The service request is processed successfully.",
                };
            }
        } catch (error) {
            throw new HttpException("Can not process your request", HttpStatus.NOT_ACCEPTABLE);
        }
    }



    async transactionStatus(token: string) {
        let headers = { "Authorization": `Bearer ${token}` }
        const url = 'https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query';

        const resultsUrl = "https://xpwf9k2s-3000.uks1.devtunnels.ms/payments/results"
        const queueTimeOutURL = "https://xpwf9k2s-3000.uks1.devtunnels.ms/payments/queue/";
        const requrstBody = {
            "Initiator": "testapi",
            "SecurityCredential": "",
            "CommandID": "TransactionStatusQuery",
            "TransactionID": "",
            "PartyA": 600981,
            "IdentifierType": "1",
            "ResultURL": resultsUrl,
            "QueueTimeOutURL": queueTimeOutURL,
            "Remarks": "dfggfdgfdgf",
            "Occassion": "dffdggf",
        }

        try {
            const { data } = await axios.post(url, requrstBody, { headers })
            return data

        } catch (error) {
            console.log(error)
        }

    }

    async customerToBusiness(token: string) {
        const auth = `Bearer ${token}`;
        let headers = { Authorization: auth }
        let billrefNumber = 245233
        const shortCode = this.configService.get("C_TO_B_BUSINESS_CODE")

        const url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate";
        try {
            const { data } = await axios.post(url, {
                ShortCode: shortCode,
                CommandID: "CustomerBuyGoodsOnline",
                Amount: 1060,
                Msisdn: 254723032500,
                BillRefNumber: "",

            },
                {
                    headers
                })
            return data

        } catch (error) {
            console.log(error)
        }

    }
    async businessToCustomer(token: string, businessToCustomerData: any) {
        const { occasion, receipientPhoneNumber, amount, remarks } = businessToCustomerData
        const auth = `Bearer ${token}`;
        const url = "https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest";
        const shortCode = this.configService.get("MPESA_BUSINESS_SHORT_CODE");
        const resultsUrl = "https://xpwf9k2s-3000.uks1.devtunnels.ms/payments/results"
        const queueTimeOutURL = "https://xpwf9k2s-3000.uks1.devtunnels.ms/payments/timeouturl"

        try {
            const { data } = await axios.post(url, {
                "OriginatorConversationID": "1fe79481-2804-4327-a20e-af27839de512",
                "InitiatorName": 'testapi',
                "SecurityCredential": 'testapi',
                "CommandID": 'BusinessPayment',
                "Amount": amount,
                "PartyA": shortCode,
                "PartyB": receipientPhoneNumber,
                "Remarks": remarks,
                "QueueTimeOutURL": queueTimeOutURL,
                "ResultURL": resultsUrl,
                "Occasion": occasion
            }, {
                headers: { "Authorization": auth }
            });

            return data;
        } catch (error) {
            throw new HttpException("Can not process your request", HttpStatus.NOT_ACCEPTABLE);
        }
    }

    async businessToBusiness(token: string) {
        const auth = `Bearer ${token}`;
        const url = 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest';
        try {

        } catch (error) {

        }

    }
    async getAccountBalance(token: string) {
        const auth = `Bearer ${token}`;
        const url = 'https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query';
        const shortCode = this.configService.get('MPESA_BUSINESS_SHORT_CODE');
        const passKey = this.configService.get('MPESA_PASS_KEY');
        const timeStamp = await this.generateTimestamp();
        const password = await this.generateStkPassword(timeStamp);

        try {
            const { data } = await axios.post(url, {
                "Initiator": 'testapi',
                "SecurityCredential": password,
                "CommandID": 'AccountBalance',
                "PartyA": shortCode,
                "IdentifierType": '4', // This indicates that PartyA is a shortcode
                "Remarks": 'Account balance request',
                "QueueTimeOutURL": 'YOUR_QUEUE_TIMEOUT_URL',
                "ResultURL": 'YOUR_RESULT_URL',
                "Occasion": 'Check account balance'
            }, {
                headers: { "Authorization": auth }
            });

            return data;
        } catch (error) {
            throw new HttpException('Failed to get account balance', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async reverseTransaction(token: string, transactionID: string): Promise<any> {
        const url = 'https://sandbox.safaricom.co.ke/mpesa/reversal/v1/request';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };

        const requestBody = {    
            "Initiator":"TestInit610",    
            "SecurityCredential": "[encrypted password]",    
            "CommandID":"TransactionReversal",    
            "TransactionID": "[original trans_id]",    
            "Amount":"[trans_amount]",    
            "ReceiverParty":"600610",    
            "RecieverIdentifierType":"11",    
            "ResultURL":"https://ip:port/",    
            "QueueTimeOutURL":"https://ip:port/",    
            "Remarks":"Test",    
            "Occasion":"work"
         }

        try {
            const response = await axios.post(url, requestBody, { headers });
            return response.data;
        } catch (error) {
            throw new HttpException('Failed to initiate transaction reversal', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}


