import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import Booking from "./entity/booking.entity";
import MoreInfo from "./entity/moreInfo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Booking, MoreInfo])],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookModule {}
