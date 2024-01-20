import { PrimaryGeneratedColumn, Column, JoinColumn, Entity, OneToOne, OneToMany } from "typeorm";
import LocalFile from "../../local-file/entity/localFile.entity"
import { Exclude, Expose } from "class-transformer";
import { UserRole } from "../dto/roles.interface"
import Review from "../../reviews/entity/review.entity";
import Booking from "../../booking/entity/booking.entity"
import Comment from "../..//kanban/entity/comment.entity";
import Task from "../..//kanban/entity/task.entity";


@Entity()
class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @Expose()
  name: string;

  @Column({
    unique: true //unique flag. It indicates that there should not be two users with the same email
  })
  @Expose()
  email: string;

  @Column({ nullable: true })
  public phoneNumber: string;

  @Column({ default: false })
  public isPhoneNumberConfirmed: boolean;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  roles?: UserRole;

  @Column({ nullable: true })
  // @Exclude()
  public password?: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @OneToOne(
    () => LocalFile,
    {
      nullable: true
    }
  )
  @JoinColumn({ name: 'avatarId' })
  public avatar?: LocalFile;

  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;

  @Column({ nullable: true })
  public avatarId?: number;
  // Thanks to creating the separate avaterId property, we can get the id of the file even without joining the DatabaseFile table. This neat trick can 
  // increase our performance a bit and avoid fetching the binary data unnecessarily.

  // @Exclude()
  confirmPassword: string;

  @Column({ nullable: true })
  // @Exclude()
  public currentHashedRefreshToken?: string;

  @Column({ nullable: true })
  // @Exclude()
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

};
export default User;