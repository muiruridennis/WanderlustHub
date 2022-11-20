import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable, BeforeInsert } from "typeorm";
import Destination from "../../destinations/entity/destination.entity";
import Payment from "../../payment/entity/payment.entity";

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
    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }

    @Column({ unique: true })
    profileImage: string;
    
    @Column()
    phoneNumber: string;

    @Column()
    address: string;

    @Column()
    group: string;

    @Column()
    lastPackage: string;

    // @ManyToMany(() => Destination, destination => destination.clients, {
    //     cascade: true,
    // })
    @JoinTable()
    destinations: Destination[];

    @ManyToMany(type => Payment, payment => payment.client, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinTable()
    payment: Payment[];
}
export default Client;