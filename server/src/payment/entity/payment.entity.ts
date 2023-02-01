import {PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToOne, ManyToOne} from "typeorm"
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

    @Column({default: false,})
    approved: boolean;

    @CreateDateColumn()
    paymentDate: Date

    @ManyToOne(() => Client, client => client.payments)
    client: Client;

    // @ManyToOne(()=> Tour, tour => tour.payment)
    // tour: Tour;

}
export default Payment;