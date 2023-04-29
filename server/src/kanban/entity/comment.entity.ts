import {
    Column,
    PrimaryGeneratedColumn,
    Entity,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import User from "../../users/entity/user.entity";
import Task from "./task.entity";


@Entity()
class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @ManyToOne(
        () => Task,
        task => task.comments)
    task: Task;

    @ManyToOne(
        () => User,
        (author: User) => author.comments
    )
    public author: User;
}
export default Comment;