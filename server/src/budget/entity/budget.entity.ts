import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  dateRange: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}