import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository, } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Booking from "./entity/booking.entity";
import { CreateBookingDto } from "./dtos/createBooking.dto";
import { BookingResponseDto } from "./dtos/booking-response.dto";
import { UpdateBookingDto } from "./dtos/updateBooking.dto";
import { BookingPaginationDto } from './dtos/booking-pagination.dto';
import User from '.././users/entity/user.entity';
import Payment from ".././payment/entity/payment.entity";

import { TourService } from "../tour/tour.service";
import { NotificationService } from './../notification/notification.service';


@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
        @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
        private tourService: TourService,
        private notificationService: NotificationService,
    ) { }

    parseParamToInt(param: string | undefined, defaultValue: number): number {
        if (!param) {
            return defaultValue;
        }
        const parsedValue = parseInt(param, 10);
        return isNaN(parsedValue) ? defaultValue : parsedValue;
    }

    async findAllBookings(page: string | undefined, perPage: string | undefined): Promise<BookingResponseDto[]> {
        const parsedPage = await this.parseParamToInt(page, 1); // Default to 1 if page is not provided
        const parsedPerPage = await this.parseParamToInt(perPage, 10); // Default to 10 if perPage is not provided

        const skip = (parsedPage - 1) * parsedPerPage;

        const bookings = await this.bookingRepository
            .createQueryBuilder('booking')
            .leftJoinAndSelect('booking.user', 'user')
            .leftJoinAndSelect('booking.tour', 'tour')
            .leftJoinAndSelect('booking.payments', 'payments')
            .select([
                'booking.id',
                'booking.status',
                'booking.bookedAtDate',
                'booking.remainingBalance',
                'user.id',
                'user.name',
                'tour.id',
                'tour.name',
                'payments.id',
                'payments.amount',
                'payments.paymentMethod'
            ])
            .skip(skip)
            .take(parsedPerPage)
            .getMany();

        return bookings.map(booking => ({
            id: booking.id,
            status: booking.status,
            bookedAtDate: booking.bookedAtDate,
            remainingBalance: booking.remainingBalance,
            user: {
                id: booking.user.id,
                name: booking.user.name,
            },
            tour: {
                id: booking.tour.id,
                name: booking.tour.name,
            },
            payments: booking.payments.map(payment => ({
                id: payment.id,
                amountPaid: payment.amount,
                paymentMethod: payment.paymentMethod
            })),
        }));
    }


    async createBooking(body: CreateBookingDto, user: User,) {
        const tour = await this.tourService.getById(body?.tourId);
        const remainingBalance = tour.price - (body.amount); // Use 0 if 'amount' is undefined

        const booking = await this.bookingRepository.create({
            remainingBalance,
            user,
            tour,
        })
        await this.bookingRepository.save(booking)

        // Check if the booking is fully paid:
        if (booking.remainingBalance <= 0) {
            console.log('Booking marked complete');
        }

        // Trigger a notification to admin users about the new booking
        this.notificationService.notifyAdminsAboutNewBooking(booking);
        return booking
    }
    async repayRemainingBalance(bookingId: number, paidAmount: number) {
        const booking = await this.findBookingById(bookingId);
        if (!booking) {
            throw new NotFoundException(`Booking with ID ${bookingId} not found`);
        }
    
        // Calculate remaining balance after repayment
        let remainingBalance = booking.remainingBalance - paidAmount;
    
        // If the remaining balance becomes negative, set it to zero
        if (remainingBalance < 0) {
            remainingBalance = 0;
        }
    
        // Create payment entity for repayment
        const repaymentPayment = await this.paymentRepository.create({
            amount: paidAmount,
            // paymentMethod: PaymentMethod.MPESA, // Assuming MPESA as the payment method for repayment
            booking,
        });
    
        // Save repayment payment
        await this.paymentRepository.save(repaymentPayment);
    
        // Update remaining balance of the booking
        booking.remainingBalance = remainingBalance;
        await this.bookingRepository.save(booking);
    }
    
    async findBookingById(id: number) {
        const booking = await this.bookingRepository.findOne(
            {
                where: { id }
            });
        if (!booking) {
            throw new HttpException(`Booking with id ${id} does not exist`, HttpStatus.NOT_FOUND);
        }
        return booking;
    };
    async getById(id: number) {
        const booking = await this.bookingRepository.findOneBy({ id });
        if (booking) {
            return booking;
        }
        throw new HttpException(
            `Booking with  id ${id} does not exist`,
            HttpStatus.NOT_FOUND
        );
    }
    async updateBooking(bookingId: number, updates: UpdateBookingDto) {
        await this.getById(bookingId);
        await this.bookingRepository.update(bookingId, updates);
        return { message: 'Booking updated successfully' }
    }


    async deleteBooking(bookingId: number) {
        const booking = await this.getById(bookingId);
        await this.bookingRepository.remove(booking);
        return { message: "Booking deleted successfully" }
    }



}
// Creating Bookings and Payments:

// When a booking is created, set the totalAmount to the total cost of the booking (e.g., 7000 Ksh) and the remainingBalance to the same value.
// For each partial payment received (e.g., 2500 Ksh), create a Payment entity, set the amount, and associate it with the booking.
// Deduct the payment amount from the remainingBalance of the booking.
// Updating the Remaining Balance:

// As more payments are made, you can keep updating the remainingBalance of the booking by subtracting the total sum of associated payments from the totalAmount.
// When the remainingBalance reaches zero or a specific threshold, you can mark the booking as fully paid.
// By using this approach, you can keep track of the total cost of a booking, the remaining balance,
// and the associated payments. This allows you to manage partial payments and track when a
//  booking has been fully paid. Additionally, you can generate reports or notifications when a booking
//  is fully paid or when the remaining balance is below a certain threshold.