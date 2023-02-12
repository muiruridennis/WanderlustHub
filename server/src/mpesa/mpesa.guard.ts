import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from '@nestjs/common';
import RequestWithToken from './requestWithToken'
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import base64 from "base-64"

@Injectable()
export class MpesaGuard implements CanActivate {
    constructor(private readonly configService: ConfigService,
    ) { }
    async canActivate(context: ExecutionContext) {
       
        const consumerKey = this.configService.get('MPESA_CONSUMER_KEY');
        const consumerSecret = this.configService.get('MPESA_BUSINESS_SHORT_CODE');
        const url = this.configService.get('MPESA_OAUTH_TOKEN_URL');

        let buffer = base64.encode(consumerKey + ":" + consumerSecret)
        let auth = `Basic ${buffer}`;
        const request: RequestWithToken = context.switchToHttp().getRequest();
        try {
            let { data } = await axios.get(url, {
                'headers': {
                    "Authorization": auth
                }
            });
            //   res.send(data)
            request.token = data['access_token'];

            return true;
        } catch (error) {

            throw new UnauthorizedException('unauthorized');
        }

        //   if (!request.user?.isEmailConfirmed) {
        //   }

    }
}