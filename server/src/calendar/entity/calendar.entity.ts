import {
    PrimaryGeneratedColumn, Column, Entity,
     ManyToOne, OneToMany
} from "typeorm";
import Tour from "../../tour/entity/tour.entity";
import User from "../../users/entity/user.entity";


@Entity()
class CustomEvent  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('timestamp')
    startDate: Date;

    @Column('timestamp')
    endDate: Date;

    @Column({ nullable: true })
    description: string;

    @Column({ default: false })
    allDay: boolean;

    @ManyToOne(() => Tour, tour => tour.customEvents )
    tour: Tour;

    @ManyToOne(() => User, user => user.customEvents)
    user: User
}
export default CustomEvent;