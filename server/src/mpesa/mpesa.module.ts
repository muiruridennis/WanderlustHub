import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MpesaController } from './mpesa.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MpesaService } from './mpesa.service';
import { ConfigModule } from '@nestjs/config';
import { MpesaMiddleware } from './mpesa.middleware';
import Mpesa from "./entity/mpesa.entity"
import { TourModule } from "../tour/tour.module";
import { PaymentModule } from '../payment/payment.module';
import { BookModule } from '../booking/booking.module';
import { NotificationModule } from '../notification/notification.module';
import { UsersModule } from '../users/users.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Mpesa]),
    ConfigModule,
    BookModule,
    TourModule,
    PaymentModule,
    BookModule,
    NotificationModule,
    UsersModule
  ],
  controllers: [MpesaController],
  providers: [MpesaService]
})
export class MpesaModule
  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MpesaMiddleware)
      .exclude(
        {
          path: 'date', method: RequestMethod.POST,
        }
      )
      .forRoutes(MpesaController)
  }
}
