import { Request } from 'express';
import { Controller, Get, Req, Post } from '@nestjs/common';
import { MpesaService } from './mpesa.service';
import RequestWithToken from "./requestWithToken";
import StkPush from './dto/stkPush.dto';


@Controller('mpesa')
export class MpesaController {
    constructor(private mpesaService: MpesaService) { }

    @Post("lipanampesa")
    async lipaNaMpesa(@Req() req: RequestWithToken) {
        return await this.mpesaService.getPassword(req.token)
    }
    @Post('stkpush')
    async lipaNaMpesaStkPush(@Req() request: RequestWithToken, stkPush: StkPush) {
        const { token } = request
        return await this.mpesaService.lipaNaMpesaStkPush(token, stkPush)
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

}
