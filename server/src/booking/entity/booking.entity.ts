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

    @Column({ type: 'enum', enum: Status, default: Status.PENDING })
    status: Status;

    @Column({nullable: true})
    phoneNumber: string;
    
    @CreateDateColumn()
    bookedAtDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @Column()
    amountPaid: number;

    @Column({nullable: true})
    merchantRequestID: string;

    @Column({nullable: true})
    checkoutRequestID: string;

    @Column({nullable: true})
    responseDescription: string;

    @ManyToOne(() => User, (user: User) => user.bookings)
    public user: User;

    @ManyToOne(() => Tour, (tour: Tour) => tour.bookings)
    @JoinTable()
    public tour: Tour;
}
export default Booking;