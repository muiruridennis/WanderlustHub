import { Controller, Get, Req, Post, Body, HttpCode, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { MpesaService } from './mpesa.service';
import RequestWithToken from "./requestWithToken";
import StkPushDTO from './dto/stkPush.dto';
import User from '.././users/entity/user.entity';
import RequestWithUser from "../auth/requestWithUser.interface";
import { JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
import { request } from 'http';


@Controller('payments')
export class MpesaController {
    constructor(private mpesaService: MpesaService) { }

    // @UseGuards(JwtAuthenticationGuard )
    @Get("all")
    async getAll() {
        return await this.mpesaService.getAll();
    }

    // @UseGuards(JwtAuthenticationGuard)
    @Post('stkpush')
    async lipaNaMpesaStkPush(
        @Body() stkPushData: StkPushDTO,
        @Req() request: RequestWithToken,
        // @Req() req: RequestWithUser
    ) {
        const { token } = request
        // const { user } = req
        return await this.mpesaService.lipaNaMpesaStkPush(
            stkPushData,
            token,
            // user
        )
    }

    @HttpCode(200)
    @Post('callback')
    async handleMpesaCallback(@Req() request: Request, @Req() tokenRequest: RequestWithToken) {
        const { token } = tokenRequest
        const callbackData = await this.mpesaService.handleMpesaCallback(request, token);

        // Call stkQuery with token and checkoutRequestID
        return await this.mpesaService.stkQuery(callbackData.token, callbackData.checkoutRequestID);

    }

    @Post('customerToBusiness')
    async customerToBusiness(@Req() request: RequestWithToken) {
        const { token } = request
        return await this.mpesaService.customerToBusiness(token)
    }

    @Post('businessToCustomer')
    async businessToCustomer(@Req() request: RequestWithToken, @Body() businessToCustomerData: any) {
        const { token } = request
        return await this.mpesaService.businessToCustomer(token, businessToCustomerData)
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
    @Post('reverse')
    @HttpCode(200)
    // @ApiResponse({ status: 200, description: 'Transaction reversed successfully.' })
    async reverseTransaction(@Req() request: RequestWithToken, @Body() body: { transactionID: string }) {
        const { token } = request;
        const { transactionID } = body;
        await this.mpesaService.reverseTransaction(token, transactionID);
    }

    @Get('balance')
    @HttpCode(200)
    // @ApiResponse({ status: 200, description: 'Account balance retrieved successfully.' })
    async getAccountBalance(@Req() request: RequestWithToken) {
        const { token } = request;
        return await this.mpesaService.getAccountBalance(token);
    }




}
