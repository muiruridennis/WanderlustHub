import { Controller, Get, Req, Post, Body, HttpCode, UseGuards, Param } from '@nestjs/common';
import { Request } from 'express';
import { MpesaService } from './mpesa.service';
import RequestWithToken from "./requestWithToken";
import StkPush from './dto/stkPush.dto';
import User from '.././users/entity/user.entity';
import RequestWithUser from "../auth/requestWithUser.interface";
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';


@Controller('mpesa')
export class MpesaController {
    constructor(private mpesaService: MpesaService) { }

    // @UseGuards(JwtAuthGuard)
    @Get("all")
    async getAll() {
        return await this.mpesaService.getAll();
    }
    @Post("date")
    async getDate(date) {
        return await this.mpesaService.getDate(date);
    }
    
    @UseGuards(JwtAuthGuard)
    @Post('stkpush')
    async lipaNaMpesaStkPush(@Req() request: RequestWithToken, @Body() stkPush: StkPush,
        @Req() req: RequestWithUser
    ) {
        const { token } = request
        const { user } = req
        return await this.mpesaService.lipaNaMpesaStkPush(token,
            stkPush, user
        )
    }

    @Post('customerToBusiness')
    async customerToBusiness(@Req() request: RequestWithToken) {
        const { token } = request
        return await this.mpesaService.customerToBusiness(token)
    }

    @Post('businessToCustomer')
    async businessToCustomer(@Req() request: RequestWithToken) {
        const { token } = request
        return await this.mpesaService.businessToCustomer(token)
    }

    @Post('businesToBusiness')
    async businesToBusiness(@Req() request: RequestWithToken) {
        const { token } = request
        return await this.mpesaService.businessToBusiness(token)
    }
    @Post('transactionStatus')
    async getTransactionStatus(@Req() request: RequestWithToken) {
        const { token } = request

        return await this.mpesaService.transactionStatus(token)
    }
  

    @Post('callback')
    @HttpCode(200) // set response status code to 200
    async handleMpesaCallback(@Req() request: Request) {
        // extract the transaction status from the callback body
        const resultCode = request.body.Body.stkCallback.ResultCode;
        console.log(resultCode)
        //   check if the transaction was successful
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

            // save the transaction details to the database
            await this.mpesaService.updateTransaction(mpesaTransaction)
            // await this.mpesaService.updateCallbak(transaction.id)


            // send a success response to Safaricom
            return {
                ResponseCode: '0',
                ResponseDesc: 'success',
            };
        } else {
            // send a failure response to Safaricom
            return {
                ResponseCode: `${resultCode}`,
                ResponseDesc: 'fail',
            };
        }
    }


}
