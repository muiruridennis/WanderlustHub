import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}