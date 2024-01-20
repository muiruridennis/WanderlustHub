import {
    PrimaryGeneratedColumn, Entity,
    ManyToMany, JoinTable, CreateDateColumn, OneToOne, JoinColumn,
    Column, ManyToOne, UpdateDateColumn
} from "typeorm";
import Tour from "../../tour/entity/tour.entity";
import { Status } from "../status";
import User from "../../users/entity/user.entity"
import Mpesa from "../../mpesa/entity/mpesa.entity";

@Entity()
class Booking {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'enum', enum: Status, default: Status.PENDING })
    status: Status;

    // @Column({ nullable: true })
    // phoneNumber: string;

    @CreateDateColumn()
    bookedAtDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @OneToOne(() => Mpesa,
        {
            nullable: true,
            eager: true,
            cascade: true,
        }
    )
    @JoinColumn()
    payment: Mpesa

    @ManyToOne(() => User, (user: User) => user.bookings)
    public user: User;

    @ManyToOne(() => Tour, (tour: Tour) => tour.bookings)
    @JoinTable()
    public tour: Tour;
}
export default Booking;