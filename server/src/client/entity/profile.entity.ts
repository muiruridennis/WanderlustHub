import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import LocalFile from "../../local-file/entity/localFile.entity";
import Client from "./client.entity"

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number

  // @OneToOne(
  //   () => LocalFile,
  //   {
  //     nullable: true
  //   }
  // )
  // @JoinColumn({ name: 'avatarId' })
  // public avatar?: LocalFile;

  // @Column({ nullable: true })
  // public avatarId?: number;

  @Column()
  points: number;

  @Column()
  rating: number;

  @Column()
  balance: number;

  @Column()
  status: string;

  @Column()
  gender: string;

  @OneToOne(() => Client, (client: Client) => client.profile)
  client?: Client;
}