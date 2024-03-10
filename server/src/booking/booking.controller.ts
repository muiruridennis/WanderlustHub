import { Controller, Post, Req, Body, Delete, Param, Patch, Get, UseGuards, Query } from '@nestjs/common';
import { JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
import RequestWithUser from "../auth/requestWithUser.interface";

import { BookingService } from './booking.service';
import { CreateBookingDto } from "./dtos/createBooking.dto";
import { UpdateBookingDto } from "./dtos/updateBooking.dto";
import { BookingPaginationDto } from './dtos/booking-pagination.dto';
import { BookingResponseDto } from "./dtos/booking-response.dto";

@Controller('bookings')
export class BookingController {
    constructor(private readonly bookingService: BookingService) { };

    @UseGuards(JwtAuthenticationGuard)
    @Post("/create")
    async createBooking(@Body() bookingData: CreateBookingDto, @Req() req: RequestWithUser) {
        const booking = await this.bookingService.createBooking(bookingData, req.user)
        return booking
    }

    @Get('/all')
    async getAllBookings(@Query() paginationDto: BookingPaginationDto): Promise<BookingResponseDto[]> {
        const { page, perPage } = paginationDto;
        const bookings = await this.bookingService.findAllBookings(page, perPage);
        return bookings;
    }
    // @Get('/all')
    // async getAllBookings(@Query() paginationDto: BookingPaginationDto): Promise<BookingResponseDto[]> {
    //     const bookings = await this.bookingService.findAllBookings(paginationDto);
    //     return bookings;
    // }

    @Get(':id')
    async findBookingById(@Param('id') bookingId: number) {
        return this.bookingService.findBookingById(bookingId);
    }

    // @UseGuards(JwtAuthenticationGuard )
    @Patch('/:id')
    async updateBooking(
        @Param('id') bookingId: number,
        @Body() updates: UpdateBookingDto,
    ) {
        const updatedBooking = await this.bookingService.updateBooking(
            bookingId,
            updates,
        );
        return updatedBooking;
    }


    @Delete(':id')
    async deleteBooking(@Param('id') bookingId: number) {
        return this.bookingService.deleteBooking(bookingId);
    }
}
