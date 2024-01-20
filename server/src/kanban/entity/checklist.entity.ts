import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Task from './task.entity';

@Entity()
export default class Checklist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    isChecked: boolean;

    @ManyToOne(
        () => Task,
        (task) => task.checklists)
    task: Task;
}
