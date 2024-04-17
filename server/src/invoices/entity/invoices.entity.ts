import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
// import { Client } from './client.entity';
import Payment from '../../payment/entity/payment.entity';

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    // represent the client or customer associated with the invoice.
    //   @ManyToOne(() => Client, client => client.invoices)
    //   client: Client;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    issuanceDate: Date;

    @Column({ type: 'timestamp', nullable: true })
    dueDate: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    totalAmount: number;

    @Column()
    status: string;
    @OneToMany(() => Payment, payment => payment.invoice)
    payments: Payment[];
}