import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import {TokenPayload} from '../tokenPayload.interface';
import { UsersService } from '../../users/users.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
// we need to read the token from the Cookie header when the user requests data. To do so, we need a second passport strategy
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
    
    ) {
    super({
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), when using bearer token
      jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
        return request?.cookies?.Authentication; //reading the token from the cookie
      }]),
      //  ignoreExpiration: false,
       secretOrKey: configService.get('JWT_SECRET')
    });
  }

  async validate(payload: TokenPayload) {
    return this.userService.getById(payload.userId);
  };
 
}