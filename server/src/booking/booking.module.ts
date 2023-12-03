import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

import { TourService } from '.././tour/tour.service';
import { PaymentService } from './../payment/payment.service';
import { NotificationModule } from './../notification/notification.module';
import { TourModule } from './../tour/tour.module';
import { PaymentModule } from '.././payment/payment.module';
import { NotificationService } from './../notification/notification.service';
import Booking from "./entity/booking.entity";
import Tour from '.././tour/entity/tour.entity';
import Payment from ".././payment/entity/payment.entity";



@Module({
  imports: [TypeOrmModule.forFeature([Booking, Tour, Payment]), TourModule, NotificationModule, PaymentModule], 
  controllers: [BookingController],
  providers: [BookingService, TourService, NotificationService, PaymentService ],
  exports: [BookingService,]
})
export class BookModule {}
