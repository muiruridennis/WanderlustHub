import {
    Column, PrimaryGeneratedColumn, Entity,
    ManyToMany, JoinTable, CreateDateColumn,
    OneToOne, JoinColumn, OneToMany,
} from "typeorm";
import { Profile } from './profile.entity';
import Payment from "../../payment/entity/payment.entity";
import Address from "./address.entity";
import Booking from "../../booking/entity/booking.entity"

@Entity()
class Client {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phoneNumber: string;


    @OneToOne(() => Address, address => address.client, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    public address: Address;

    @OneToOne(() => Profile, (profile: Profile) => profile.client, {
        cascade: true,
        eager: true,
    })
    @JoinColumn()
    profile: Profile;

    @Column()
    group: string;

    @Column()
    lastPackage: string;

    @CreateDateColumn()
    clientFrom: Date;

    @OneToMany(() => Payment, payment => payment.client, {
        cascade: true,
    })
    @JoinTable()
    payments: Payment[];

    // @OneToMany(() => Booking, booking => booking.client, {
    //     cascade: true,
    // })
    // bookings: Booking[];

}
export default Client;