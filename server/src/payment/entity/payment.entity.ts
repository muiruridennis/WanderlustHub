import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToOne, ManyToOne, CreateDateColumn } from "typeorm"
import Booking from '../../booking/entity/booking.entity'; 
import { PaymentMethod } from "../paymentMethod.enum";
import { Invoice } from "../../invoices/entity/invoices.entity";
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

    @ManyToOne(() => Invoice, invoice => invoice.payments)
    invoice: Invoice;
   
}
export default Payment;