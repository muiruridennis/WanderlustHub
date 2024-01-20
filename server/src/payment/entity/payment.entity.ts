import {PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToOne, ManyToOne} from "typeorm"
import User from "../../users/entity/user.entity";
import Client from "../../client/entity/client.entity";
import Tour from "../../tour/entity/tour.entity";

@Entity()
class Payment {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    paymentAmount: number;

    @Column()
    referenceNumber: string;

    @Column({default: false})
    paymentSuccess: boolean;

    @Column({default: false})
    approved: boolean;

    @CreateDateColumn()
    paymentDate: Date

    // @ManyToOne(() => User, user => user.payments)
    // user: User;

    // @ManyToOne(()=> Tour, tour => tour.payments)
    // tour: Tour;

}
export default Payment;