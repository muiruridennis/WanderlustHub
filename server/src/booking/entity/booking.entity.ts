import {
    PrimaryGeneratedColumn, Entity,
    ManyToMany, JoinTable, CreateDateColumn, OneToOne, JoinColumn,
    Column, ManyToOne, UpdateDateColumn
} from "typeorm";
import Client from "../../client/entity/client.entity";
import Tour from "../../tour/entity/tour.entity";
import {Status} from "../status";
import User from "../../users/entity/user.entity"

@Entity()
class Booking {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'enum', enum: Status, default: Status.COMPLETED })
    status: Status;

    @Column({nullable: true})
    bookingPlatform: string;
    
    @CreateDateColumn()
    bookedAtDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @Column()
    tourCost: number;

    @Column()
    tourDepositAmount: number;

    @Column()
    totalAmountPaid: number;

    @Column()
    discountAmount: number;

    @Column()
    sharingType: string;

    @ManyToOne(() => User, (user: User) => user.bookings)
    public user: User;

    @ManyToOne(() => Tour, (tour: Tour) => tour.bookings)
    @JoinTable()
    public tour: Tour;
}
export default Booking;