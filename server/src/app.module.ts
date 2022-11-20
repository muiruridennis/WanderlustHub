import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
 import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { DestinationsModule } from './destinations/destinations.module';
import { PermissionsModule } from './permissions/permissions.module';
import { PaymentModule } from './payment/payment.module';
import { DirectorsModule } from './directors/directors.module';
import { LocalFileModule } from './local-file/local-file.module';
import * as Joi from 'joi';

@Module({
  imports: [ UsersModule, DatabaseModule, AuthModule, ConfigModule.forRoot({
    validationSchema: Joi.object({
      DB_TYPE : Joi.string().required(),
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      PORT: Joi.number(),
      JWT_SECRET: Joi.string().required(),
      TOKEN_EXPIRATION_TIME: Joi.string().required(),
      JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
      JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
    })
  }), ClientsModule, DestinationsModule, PermissionsModule, PaymentModule, DirectorsModule, LocalFileModule,
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
