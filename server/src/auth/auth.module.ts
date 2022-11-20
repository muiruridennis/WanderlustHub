import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from "../users/users.module"; // we have access to all of the exported providers from UsersModule
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {JwtRefreshTokenStrategy} from "./refresh-token.strategy"


@Module({
  imports: [forwardRef(() => UsersModule), ConfigModule, PassportModule, JwtModule.registerAsync({ //we import user module so that we can be able to use UserServices
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get("JWT_SECRET"),
      signOptions: {
        expiresIn: `${configService.get('TOKEN_EXPIRATION_TIME')}s`,
      },
    }),

  }),
],
  providers: [AuthService, JwtStrategy, LocalStrategy, JwtRefreshTokenStrategy],
  controllers: [AuthController],
  exports: [AuthService],

})
export class AuthModule { }
