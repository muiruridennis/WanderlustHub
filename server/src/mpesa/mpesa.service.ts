import { BadRequestException, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as moment from 'moment';
import axios from 'axios';
import { response } from 'express';
import StkPush from './dto/stkPush.dto';
import { BookingService } from './../booking/booking.service';

@Injectable()
export class MpesaService {
    constructor(
        private configService: ConfigService,
        private bookingService: BookingService
    ) {

    }
    async getPassword(token: string) {

        const auth = `Bearer ${token}`;
        return auth

    }
    async lipaNaMpesaStkPush(token: string, stkPushData: StkPush) {
        const { amount, phoneNumber } = stkPushData
        const auth = `Bearer ${token}`;
        const timeStamp = moment().format("YYYYMMDDHHmmss");
        const businessShortCode = this.configService.get('MPESA_BUSINESS_SHORT_CODE');
        const passKey = this.configService.get('MPESA_PASS_KEY');
        const password = Buffer.from(businessShortCode + passKey + timeStamp).toString('base64');

        let headers = { Authorization: auth }

        try {
            const { data } = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
                {
                    BusinessShortCode: businessShortCode,
                    Password: password,
                    Timestamp: timeStamp,
                    TransactionType: "CustomerPayBillOnline",
                    Amount: amount,
                    PartyA: phoneNumber, //+2547220....,
                    PartyB: businessShortCode,
                    PhoneNumber: phoneNumber, //+2547220....,
                    CallBackURL: 'https://e1fc-102-219-210-194.ngrok.io/mpesa/stkpush',
                    AccountReference: "Take-us Safaris",
                    TransactionDesc: "Payment of tour booking "
                },
                {
                    headers
                })
            if (data.ResponseCode === "0") {
                //save the data to the database
                //data to save should have id of the item the payment is made for
                const { MerchantRequestID, CheckoutRequestID, ResponseDescription } = data;

               await this.bookingService.createBooking({
                    ...bookingData,
                    merchantRequestID: MerchantRequestID, 
                    checkoutRequestID: CheckoutRequestID, 
                    responseDescription: ResponseDescription
                })

                return (
                    {
                        success: true,
                        message: "Success"
                    }
                )
            }
        } catch (error) {
            if (response.status(400)) {
                throw new BadRequestException("Invalid input")
            }
            throw new HttpException("Can not process your request", HttpStatus.NOT_ACCEPTABLE)
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
    async businessToCustomer(token: string) {
        const auth = `Bearer ${token}`;
        const url = "https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest";
        try {

        } catch (error) {

        }
    }
    async businessToBusiness(token: string) {
        const auth = `Bearer ${token}`;
        const url = 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest';
        try {

        } catch (error) {

        }

    }
    async transactionStatus(token: string) {
        const auth = `Bearer ${token}`;
        let headers = { Authorization: auth }
        const url = 'https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query';
        const queueTimeOutURL = "https://mydomain.com/TransactionStatus/queue/";


        try {
            const { data } = await axios.post(url,
                {
                    Initiator: "testapi",
                    SecurityCredential: "ZqLurgcZyd4MSxmvppVkRIP7FU6ONokQgqft5J8aCVWTBfmxXjKQb9iwnHbCzQb5sMhHwEg1ZMX/Nb2DsIbJYL2wYW7wN1Fn9AFgjbdjPPgGQ3av8KYFLl+FTrsk6cZ2SwodJF4Ci6vb7eB1yrYUimrXMnCiEVjM/gKLngLxycc51r8DdzxzwTQZQvmB2uxTxRLHGXLJ44ccNpIiQfkkhls9THj0g5kXdTj9CXcBe5OMdDTpRM8Gt8xtzDJw9+Vox2txl2NctdcXinwZsLvvsok29J3xGfjIEoofNSy5uWU1YYJuBa1IQOpcX4G1AqsXNpWyk/k9M8mgUyYasyOAXQ==",
                    CommandID: "TransactionStatusQuery",
                    TransactionID: "OEI2AK4Q16",
                    PartyA: 600981,
                    IdentifierType: "1",
                    ResultURL: "https://mydomain.com/TransactionStatus/result/",
                    QueueTimeOutURL: queueTimeOutURL,
                    Remarks: "",
                    Occassion: "",
                },
                {
                    headers
                })
            

            } catch (error) {
                console.log(error)
            }

        }
}
