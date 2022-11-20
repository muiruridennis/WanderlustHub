import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, 
    ManyToMany, BaseEntity, JoinTable, OneToMany } from "typeorm";
import Client from "../../clients/entity/client.entity";
import Payment from "../../payment/entity/payment.entity";

@Entity()
class Destination extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({nullable: true })
    tourName: string; 

    @Column({nullable: true })
    cost: number;

    @Column({nullable: true })
    status: string;

    @CreateDateColumn()
    plannedDate: Date;

    @Column({nullable: true })
    targetGroup: string;

    @Column({nullable: true })
    packageName: string;

    @Column({nullable: true })
    hotelName: string;

    @Column({nullable: true })
    cookchecked : boolean;

    @Column({nullable: true })
    photoGrapher : boolean;

    @Column({nullable: true })
    campingChairs : boolean;

    @Column({nullable: true })
    truck : boolean;

    @Column({nullable: true })
    tents : boolean;

    @Column({nullable: true })
    utensils : boolean;

    @Column({nullable: true })
    venue: string;

    @Column({nullable: true })
    coordinator : string;
    @Column({array: true, nullable: true})
    clients : string;

    // @ManyToMany(() => Client, client => client.destinations)
    // clients: Client[];
    @OneToMany(() => Payment, payment => payment.destination, {
        cascade: true,
    })
    payment: Payment;
}
export default Destination;