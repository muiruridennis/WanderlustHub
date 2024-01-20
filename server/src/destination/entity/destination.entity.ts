import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToOne, ManyToMany, JoinTable} from "typeorm"
import Tour from "../../tour/entity/tour.entity";

@Entity()
class Destination {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: true})
    desinationName: string;

    // @OneToOne(() => Address, {
    //     eager: true,
    //     cascade: true,
    // })
    // @JoinColumn()
    // public address: Address;

    // @ManyToMany(() => Tour, tour => tour.destinations)
    // tours: Tour[];

}
export default Destination;