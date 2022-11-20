import { PrimaryGeneratedColumn, Column, JoinColumn, Entity, BeforeInsert, OneToOne } from "typeorm";
import LocalFile from "../../local-file/entity/localFile.entity"
import { Exclude } from "class-transformer";
import {UserRole} from "../models/roles.interface"


@Entity()
class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        unique: true //unique flag. It indicates that there should not be two users with the same email
    })
    email: string;
    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
    @Column({type: 'enum', enum: UserRole, default: UserRole.USER})
    roles?: UserRole;

    @Column()
    @Exclude()
    password: string;
    
    @JoinColumn({ name: 'avatarId' })
  @OneToOne(
    () => LocalFile,
    {
      nullable: true
    }
  )
  public avatar?: LocalFile;
 
  @Column({ nullable: true })
  public avatarId?: number;
    // Thanks to creating the separate avaterId property, we can get the id of the file even without joining the DatabaseFile table. This neat trick can 
    // increase our performance a bit and avoid fetching the binary data unnecessarily.

    @Exclude()
    confirmPassword: string;

    @Column({ nullable: true })
    @Exclude()
    public currentHashedRefreshToken?: string;

};
export default User;