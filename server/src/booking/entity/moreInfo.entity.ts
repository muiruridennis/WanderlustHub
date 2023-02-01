import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn  } from "typeorm";
import Booking from "./booking.entity";

@Entity()
export default class MoreInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    bookedAtDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @OneToOne(() => Booking, booking => booking.moreInfo)
    booking: Booking;
}