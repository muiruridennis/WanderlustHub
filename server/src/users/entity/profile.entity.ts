import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import LocalFile from "../../local-file/entity/localFile.entity";
import User from "./user.entity";
import { Gender, Status, Group } from "../-enum";
@Entity()
 class Profile {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(
    () => LocalFile,
    {
      nullable: true
    }
  )
  @JoinColumn({ name: 'avatarId' })
  public avatar?: LocalFile;

  @Column({ nullable: true })
  public avatarId?: number;

  @Column({nullable: true })
  points: number;

  @Column({nullable: true })
  balance: number;

  @Column({ type: 'enum', enum: Status, default: Status.ACTIVE })
  status: Status;

  @Column({ type: 'enum', enum: Group, default: Group.BRONZE })
  group: Group;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @OneToOne(() => User, (user: User) => user.profile)
  user: User;
}
export default Profile;