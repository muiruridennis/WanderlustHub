import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import Comment from './comment.entity';
import Checklist from './checklist.entity';
import { Priority } from '../Priority';
import User from "../../users/entity/user.entity";


@Entity()
export default class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'enum', enum: Priority, default: Priority.MEDIUM })
    priority: Priority;

    @Column()
    description: string;

    @OneToMany(() => Comment, comment => comment.task, {
        eager: true,
        cascade: true,
        onDelete: "CASCADE",
    })
    comments: Comment[];


    @OneToMany(() => Checklist, (checklist) => checklist.task, {
        eager: true,
        cascade: true,
    })
    checklists: Checklist[];

    @ManyToOne(
        () => User,
        (author: User) => author.kanbanTask
    )

    public author: User;


    @Column()
    assignedTo: string;

    @Column({ type: 'date' })
    dueDate: Date

    @Column()
    status: string;
}
