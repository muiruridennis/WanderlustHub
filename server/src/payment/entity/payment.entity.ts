import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToOne, ManyToOne, CreateDateColumn } from "typeorm"
import Booking from '../../booking/entity/booking.entity'; // Adjust the import path as needed
import { PaymentMethod } from "../paymentMethod.enum";
import Mpesa from '../../mpesa/entity/mpesa.entity'

@Entity()
class Payment {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    amount: number;

    @CreateDateColumn({ type: 'timestamp', })
    createdAt: Date;

    @Column({ type: 'enum', enum: PaymentMethod, default: PaymentMethod.MPESA })
    paymentMethod: PaymentMethod;

    @ManyToOne(() => Booking, booking => booking.payments, {
        onDelete: 'CASCADE', // Optional: Delete associated payment when booking is deleted

    })
    booking: Booking;

   
}
export default Payment;