import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Client from "./client.entity";

@Entity()
class Address {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public street: string;

  @Column()
  public city: string;

  @Column()
  public country: string;

  @OneToOne(() => Client,(client: Client) => client.address,
  )
  public client : Client;
}

export default Address;