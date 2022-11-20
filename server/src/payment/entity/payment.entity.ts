import {PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToOne, ManyToOne} from "typeorm"
import Client from "../../clients/entity/client.entity";
import Destination from "../../destinations/entity/destination.entity";

@Entity()
class Payment {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    payAmount: number;

    @CreateDateColumn()
    payDate: Date

    @OneToOne(() => Client, client => client.payment)
    client: Client;

    @ManyToOne(()=> Destination, destination => destination.payment)
    destination: Destination;

}
export default Payment;