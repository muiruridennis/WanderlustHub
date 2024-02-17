import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MpesaController } from './mpesa.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MpesaService } from './mpesa.service';
import { ConfigModule } from '@nestjs/config';
import { MpesaMiddleware } from './mpesa.middleware';
import { BookModule } from '../booking/booking.module';
import Mpesa from "./entity/mpesa.entity"
import { TourModule } from "../tour/tour.module";
import { TourService } from "../tour/tour.service";
import Tour from '.././tour/entity/tour.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Mpesa, Tour]), ConfigModule, BookModule, TourModule],
  controllers: [MpesaController],
  providers: [MpesaService, TourService]
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
