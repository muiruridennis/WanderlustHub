import {
    PrimaryGeneratedColumn, Entity,
    ManyToMany, JoinTable, CreateDateColumn, OneToOne, JoinColumn,
    Column, ManyToOne, UpdateDateColumn
} from "typeorm";
import Booking from "../../booking/entity/booking.entity"

@Entity()
export default class Mpesa {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    amountPaid: number;

    @Column()
    payingPhoneNumber: string;


    // @Column({ type: 'timestamp', nullable: true })
    @CreateDateColumn({ nullable: true })
    transactionDate: Date;

    @Column({ nullable: true })
    mpesaReceiptNumber: string;

    @Column()
    merchantRequestID: string;

    @Column()
    checkoutRequestID: string;

    @OneToOne(
        () => Booking,
    )
    booking?: Booking
} 
