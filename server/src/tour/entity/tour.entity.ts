import { OneToMany } from 'typeorm';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { Difficulty } from '../Difficulty';
import Review from '../../reviews/entity/review.entity';

@Entity()
class Tour {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    name: string;

    @Column()
    startDate: Date;

    @Column()
    price: number;

    @Column()
    summary: string;

    @Column({ nullable: true })
    imageCover: string;

    @Column({ type: 'enum', enum: Difficulty, default: Difficulty.MEDIUM })
    Difficulty : Difficulty;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @OneToMany(() => Review, review => review.tour, {
        eager: true,
        cascade: true,
    })
    reviews: Review[]

}

export default Tour;