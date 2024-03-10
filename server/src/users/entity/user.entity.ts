import { PrimaryGeneratedColumn, Column, JoinColumn, Entity, OneToOne, OneToMany } from "typeorm";
import { Expose, Exclude } from "class-transformer";
import Review from "../../reviews/entity/review.entity";
import Booking from "../../booking/entity/booking.entity"
import Comment from "../../kanban/entity/comment.entity";
import Task from "../../kanban/entity/task.entity";
import CustomEvent from '../../calendar/entity/calendar.entity';
import NotificationPreference from "./notificationPreference.entity";
import Address from "./address.entity";
import  Profile  from './profile.entity';
import Permission from "../.././utils/types/permission.type"


@Entity()
class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @Expose()
  name: string;

  @Column({ unique: true })
  @Expose()
  email: string;

  @Column({ nullable: true })
  public phoneNumber: string;

  @Column({ default: false })
  public isPhoneNumberConfirmed: boolean;

  @Column({
    type: 'enum',
    enum: Permission,
    array: true,
    default: []
  })
  public permissions: Permission[]


  @Column({ nullable: true })
  @Exclude()
  public password?: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;

  @Column({ nullable: true })
  @Exclude()
  public currentHashedRefreshToken?: string;

  @Column({ nullable: true })
  @Exclude()
  resetLink: string;

  @OneToMany(
    () => Review,
    (review: Review) => review.reviewer,
  )
  public reviews?: Review[];

  @OneToMany(
    () => Comment,
    (comment: Comment) => comment.author,
  )
  public comments?: Comment[];

  @OneToMany(
    () => Task,
    (task: Task) => task.author,
  )
  public kanbanTask?: Task[];

  @OneToMany(() => Booking, booking => booking.user, {
    cascade: true,
  })
  bookings: Booking[];

  @OneToMany(() => CustomEvent, (customEvent: CustomEvent) => customEvent.user, {
    cascade: true,
  })
  customEvents: CustomEvent[];


  @OneToOne(() => Address, address => address.user, {
    eager: true,
    cascade: true,
  })
  
  @JoinColumn()
  public address: Address;

  @OneToOne(() => Profile, (profile: Profile) => profile.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  profile: Profile;

  @OneToOne(() => NotificationPreference, (notificationPreference) => notificationPreference.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  notificationPreferences: NotificationPreference;
};
export default User;