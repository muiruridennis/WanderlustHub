import {
    PrimaryGeneratedColumn, Entity,
    ManyToMany, JoinTable, CreateDateColumn, OneToOne, JoinColumn,
    Column, ManyToOne, UpdateDateColumn
} from "typeorm";
import Client from "../../client/entity/client.entity";
import Tour from "../../tour/entity/tour.entity";
import MoreInfo from "./moreInfo.entity"
import {Status} from "../status"

@Entity()
class Booking {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'enum', enum: Status, default: Status.COMPLETED })
    status: Status;

    @Column({nullable: true})
    bookingPlatform: string;

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

    @OneToOne(() => MoreInfo, moreInfo => moreInfo.booking)
    @JoinColumn()
    moreInfo: MoreInfo;

    @ManyToOne(() => Client, (client: Client) => client.bookings)
    public client: Client;

    // @ManyToOne(() => Tour, (tour: Tour) => tour.bookings)
    // @JoinTable()
    // public tour: Tour;
}
export default Booking;