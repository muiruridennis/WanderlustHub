import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import Booking from "./entity/booking.entity";
import { TourService } from '.././tour/tour.service';
import { TourModule } from './../tour/tour.module';
import Tour from '.././tour/entity/tour.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Booking, Tour]), TourModule],
  controllers: [BookingController],
  providers: [BookingService, TourService ],
  exports: [BookingService,]
})
export class BookModule {}
