import { InjectRepository, } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import Booking from "./entity/booking.entity";
import CreateBookingDto from "./dtos/createBooking.dto";
import User from '.././users/entity/user.entity';
import Mpesa from '.././mpesa/entity/mpesa.entity';
import { TourService } from "../tour/tour.service";
import { MpesaService } from './../mpesa/mpesa.service';


@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
        private tourService: TourService,
        // private mpesaService: MpesaService
    ) { }
    async findAllBookings() {
        return this.bookingRepository.find({
            relations: ["user"]
        })
    }

    async createBooking(user: User, tourId: number, payment: Mpesa) {
        const tour = await this.tourService.getById(tourId);
        const book = await this.bookingRepository.create({
            user,
            tour,
            payment
        }
        )
        await this.bookingRepository.save(book)
        return book
    }
    async updateBooking() {

    }
    async deleteBooking() {

    }
    async findBookingById() {

    }

}
