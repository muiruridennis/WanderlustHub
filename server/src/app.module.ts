import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { TourModule } from './tour/tour.module';
import { PaymentModule } from './payment/payment.module';
import { DirectorsModule } from './directors/directors.module';
import { LocalFileModule } from './local-file/local-file.module';
import { DestinationsModule } from './destination/destination.module';
import { BookModule } from './booking/booking.module';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { EmailSchedulingModule } from './email-scheduling/email-scheduling.module';
import { FeatureFlagsModule } from './feature-flags/feature-flags.module';
import { SmsModule } from './sms/sms.module';
import { GoogleAuthenticationModule } from './googleAuthentication/googleAuthentication.module';
import { ReviewsModule } from './reviews/reviews.module';
import { MpesaModule } from './mpesa/mpesa.module';
import { KanbanModule } from './kanban/kanban.module';
import { CalendarModule } from './calendar/calendar.module';
import { NotificationModule } from './notification/notification.module';
import * as Joi from 'joi';


@Module({
  imports: [

    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
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
        JWT_VERIFICATION_TOKEN_SECRET: Joi.string().required(),
        JWT_VERIFICATION_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        EMAIL_SERVICE: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        EMAIL_PASSWORD: Joi.string().required(),
        TWILIO_ACCOUNT_SID: Joi.string().required(),
        TWILIO_AUTH_TOKEN: Joi.string().required(),
        TWILIO_VERIFICATION_SERVICE_SID: Joi.string().required(),
        TWILIO_SENDER_PHONE_NUMBER: Joi.string().required(),
        GOOGLE_AUTH_CLIENT_ID: Joi.string().required(),
        GOOGLE_AUTH_CLIENT_SECRET: Joi.string().required(),
        FRONTEND_URL: Joi.string().required(),
        MPESA_PASS_KEY: Joi.string().required(),
        MPESA_BUSINESS_SHORT_CODE: Joi.string().required(),
        MPESA_CONSUMER_KEY: Joi.string().required(),
        MPESA_CONSUMER_SECRET: Joi.string().required(),
        MPESA_OAUTH_TOKEN_URL: Joi.string().required(),
        C_TO_B_BUSINESS_CODE: Joi.string().required(),
        MPESA_PHONE_NUM: Joi.string().required(),
      })
    }),
    UsersModule,
    DatabaseModule,
    AuthModule,
    TourModule, PaymentModule,
    DirectorsModule, LocalFileModule, DestinationsModule, BookModule,
    EmailConfirmationModule, EmailSchedulingModule, FeatureFlagsModule,
    SmsModule, GoogleAuthenticationModule, ReviewsModule, MpesaModule,
    KanbanModule, CalendarModule,
    // EventModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
