import { Controller, Post, Req, Body, Delete, Param, Patch, Get, UseGuards, Query } from '@nestjs/common';


import { BookingService } from './booking.service';
import CreateBookingDto from "./dtos/createBooking.dto";

@Controller('bookings')
export class BookingController {
    constructor(private readonly bookingService: BookingService) { };

    @Get("/all")
    async getAllBookings() {
        const booking = await this.bookingService.findAllBookings();
        return booking;
    }
}
