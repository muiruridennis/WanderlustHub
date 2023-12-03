import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToOne, ManyToOne, CreateDateColumn } from "typeorm"
import Booking from '../../booking/entity/booking.entity'; // Adjust the import path as needed
import Mpesa from "../../mpesa/entity/mpesa.entity";

@Entity()
class Payment {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    amount: number;

    @CreateDateColumn({ type: 'timestamp',})
    paymentDate: Date;

    @Column()
    paymentMethod: string; // Payment method (e.g., credit card, PayPal, bank transfer)

    @ManyToOne(() => Booking, booking => booking.payments, {
        onDelete: 'CASCADE', // Optional: Delete associated payment when booking is deleted
        eager: true,
        cascade: true,
    })
    booking: Booking;

    @OneToOne(() => Mpesa, mpesa => mpesa.payment, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    mpesa: Mpesa;
}
export default Payment;