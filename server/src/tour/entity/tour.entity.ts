import { OneToMany } from 'typeorm';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { Difficulty } from '../difficulty';
import Review from '../../reviews/entity/review.entity';
import Booking from "../../booking/entity/booking.entity"
import Payment from "../../payment/entity/payment.entity";


@Entity()
class Tour {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    name: string;

    @Column()
    startDate: Date;

    @Column()
    price: number;

    @Column()
    summary: string;

    @Column({ nullable: true })
    imageCover: string;

    @Column({ type: 'enum', enum: Difficulty, default: Difficulty.MEDIUM })
    difficulty: Difficulty;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @OneToMany(() => Review, review => review.tour, {
        eager: true,
        cascade: true,
    })
    reviews: Review[];

    @OneToMany(() => Payment, payment => payment.tour, {
        eager: true,
        cascade: true,
    })
    payments: Payment[];

    @Column('text', { array: true, nullable: true })
    public etinerary: string[];

}

export default Tour;