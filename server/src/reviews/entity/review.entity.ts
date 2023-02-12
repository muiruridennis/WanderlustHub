import {
    Column, PrimaryGeneratedColumn, Entity,
    ManyToMany, JoinTable, CreateDateColumn,
    OneToOne, JoinColumn, OneToMany, ManyToOne, Index
} from "typeorm";
import User from "../../users/entity/user.entity";
import Tour from "../../tour/entity/tour.entity";


@Entity()
class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    review: string;

    @Column()
    rating: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @ManyToOne(
        () => Tour,
        tour => tour.reviews)
    tour: Tour;

    @ManyToOne(
        () => User,
        (reviewer: User) => reviewer.reviews
    )
    public reviewer: User;
}
export default Review;