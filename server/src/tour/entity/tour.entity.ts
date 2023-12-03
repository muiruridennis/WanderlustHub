import { OneToMany } from 'typeorm';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn , JoinColumn} from 'typeorm';
import { Difficulty } from '../difficulty';
import Review from '../../reviews/entity/review.entity';
import Booking from "../../booking/entity/booking.entity"
import Destination from '../../destination/entity/destination.entity';
import CustomEvent from '../../calendar/entity/calendar.entity';

@Entity()
class Tour {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    name: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    price: number;

    @Column()
    tourType: string;


    @Column()
    description: string;

    @Column({ nullable: true })
    imageCover: string;

    @Column({ type: 'enum', enum: Difficulty, default: Difficulty.MEDIUM })
    difficulty: Difficulty;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @OneToMany(() => Review, review => review.tour, {
        eager: true,
        cascade: true,
    })
    reviews: Review[];

    @OneToMany(() => Booking, booking => booking.tour, {
        eager: true,
        cascade: true,
    })
    bookings: Booking[];

    @Column('text', { array: true, nullable: true })
    public etinerary: string[];

    @ManyToOne(() => Destination, (destination) => destination.tours)
    destination: Destination;
    
    @OneToMany(() => CustomEvent, customEvent => customEvent.tour, {
        eager: true,
        cascade: true,
    })
    customEvents: CustomEvent[];

}

export default Tour; 