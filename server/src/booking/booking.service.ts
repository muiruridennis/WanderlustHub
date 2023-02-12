import { Injectable } from '@nestjs/common';
import { InjectRepository, } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Booking from "./entity/booking.entity";
import CreateBookingDto from "./Dtos/createBooking.dto";

@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
    ) { }
    async findAllBookings() {
        return this.bookingRepository.find()
    }

    async  createBooking( ) {


    }
    async updateBooking() {

    }
    async deleteBooking() {

    }
    async findBookingById() {

    }

}
