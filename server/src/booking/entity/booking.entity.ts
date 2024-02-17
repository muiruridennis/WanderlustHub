import {
    PrimaryGeneratedColumn, Entity,
    JoinTable, CreateDateColumn, OneToMany, Timestamp,
    Column, ManyToOne, UpdateDateColumn
} from "typeorm";
import { Status, BookingType } from "../enums";
import Tour from "../../tour/entity/tour.entity";
import User from "../../users/entity/user.entity"
import Payment from "../../payment/entity/payment.entity";


@Entity()
class Booking {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'enum', enum: Status, default: Status.PENDING })
    status: Status;

    @Column({ type: 'enum', enum: BookingType, default: BookingType.CLIENT })
    bookingType: BookingType;

    @CreateDateColumn({ type: 'timestamp' })
    bookedAtDate: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedDate: Date;

    @OneToMany(() => Payment, (payment) => payment.booking)
    payments: Payment[];

    @Column()
    remainingBalance: number;

    @ManyToOne(() => User, (user: User) => user.bookings)
    public user: User;

    @ManyToOne(() => Tour, (tour: Tour) => tour.bookings)
    public tour: Tour;
}
export default Booking;

