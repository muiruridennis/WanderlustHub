import { Injectable, NestMiddleware, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import RequestWithToken from "./requestWithToken"
@Injectable()
export class MpesaMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
  ) { }
  async use(req: RequestWithToken, res: Response, next: NextFunction) {
    const consumerKey = this.configService.get('MPESA_CONSUMER_KEY');
    const consumerSecret = this.configService.get('MPESA_CONSUMER_SECRET');
    const url = this.configService.get('MPESA_OAUTH_TOKEN_URL');

    const encoded = Buffer.from(consumerKey + ":" + consumerSecret).toString('base64')
    let headers = { "Authorization": `Basic ${encoded}` }
    
    try {
      let { data } = await axios.get(url, { headers});
      req.token = data.access_token;
      next()
    } catch (error) {
      throw new BadRequestException('Invalid Authentication passed');
    }
  }
}