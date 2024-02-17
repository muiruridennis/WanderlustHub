import {
    PrimaryGeneratedColumn, Entity, CreateDateColumn, OneToOne, JoinColumn,
    Column,
} from "typeorm";
import Payment from "../../payment/entity/payment.entity";

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
    @OneToOne(() => Payment, payment => payment.mpesa)
    payment: Payment;
  
} 
