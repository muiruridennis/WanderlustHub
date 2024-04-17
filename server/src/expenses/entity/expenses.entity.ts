import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export enum ExpenseCategory {
    TRAVEL = 'Travel',
    ACCOMMODATION = 'Accommodation',
    FOOD = 'Food',
    ENTERTAINMENT = 'Entertainment',
    OTHER = 'Other',
}
@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: ExpenseCategory })
    category: ExpenseCategory;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column()
    description: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;
    
}