import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from "../users/entity/user.entity";
import Task from './entity/task.entity';
import Checklist from './entity/checklist.entity';
import Comment from './entity/comment.entity';
import { CreateTaskDto, UpdateTaskDto } from "./Dto/createTask.dto";
import CreateCommentDto from './Dto/comment.dto';
import { CreateChecklistDto, UpdateChecklistDto } from './Dto/checklist.dto';

@Injectable()
export class KanbanService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Checklist)
    private readonly checklistRepository: Repository<Checklist>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) { }

  async getAllTasks() {
    return this.taskRepository.find(
      {
        relations: ["author", "comments.author"]
      });
  }

  async createTask(task: CreateTaskDto, user: User,) {
    const newtask = await this.taskRepository.create({
      ...task,
      author: user
    })
    await this.taskRepository.save(newtask);
    return newtask;
  }
  async findTask(id: number) {
    const task = await this.taskRepository.findOne(
      {
        where: { id }
      });
    if (task) {
      return task;
    }
    throw new HttpException(`Task  does not exist`, HttpStatus.NOT_FOUND);
  }

  async getTaskById(id: number) {
    const task = await this.taskRepository.findOneBy({ id });
    if (task) {
      return task;
    }
    throw new HttpException(
      `Task does not exist`,
      HttpStatus.NOT_FOUND
    );
  }


  // Delete the associated comments 
  // but this method is not effective because When you delete the comments individually in a loop,
  //  it results in multiple database queries, which can introduce additional overhead
  //   due to the network latency and query execution time for each deletion. 
  // This approach can become slower as the number of comments increases because each delete 
  // operation requires a round-trip to the database.
  // async deleteTask(id: number) {
  //   const task = await this.getTaskById(id);

  //   for (const comment of task.comments) {
  //     await this.commentRepository.delete(comment.id);
  //   }

  // Now delete the task
  //   await this.taskRepository.delete(id);

  //   return { message: "Task deleted successfully" };
  // }
  async deleteTask(id: number) {
    const task = await this.taskRepository.findOneBy({ id });

    if (task) {
      // Delete the associated comments and Checklists
      await this.commentRepository.delete({ task: { id } });
      await this.checklistRepository.delete({ task: { id} });

      // Now delete the task
      await this.taskRepository.delete(id);

      return { message: "Task deleted successfully!" };
    } else {
      throw new HttpException(
        `Task does not exist`,
        HttpStatus.NOT_FOUND
      );
    }
  }



  async updateTask(id: number, task: UpdateTaskDto) {
    await this.findTask(id)
    await this.taskRepository.update(id, task);
    return { message: " task updated successfully" };
  }


  async getAllChecklist() {
    return this.checklistRepository.find(
      {
        relations: ["task"]
      }
    );
  }
  async createChecklist({ title, isChecked, taskId }: CreateChecklistDto) {
    const task = await this.findTask(taskId);
    const newChecklist = await this.checklistRepository.create({
      title,
      isChecked,
      task
    });
    await this.checklistRepository.save(newChecklist);
    // Return the updated task object
    return task;
  }

  async getChecklistById(id: number) {
    const checkList = await this.checklistRepository.findOne({
      where: { id }
    });
    if (checkList) {
      return checkList;
    }
    throw new HttpException(
      `CheckList with this id does not exist`,
      HttpStatus.NOT_FOUND
    );
  }

  async updateChecklist(id: number, checklistUpdate: UpdateChecklistDto) {
    const checklist = await this.getChecklistById(id);
    await this.checklistRepository.update(id, checklistUpdate);
    return checklist
  }

  async deleteChecklist(id: number) {
    await this.getChecklistById(id);
    await this.checklistRepository.delete(id);

    return { message: 'Checklist deleted successfully' };
  }



  async createComment({ comment, taskId }: CreateCommentDto, user: User) {
    const task = await this.findTask(taskId);

    // Create the comment entity without the taskId
    const newComment = await this.commentRepository.create({
      comment,
      author: user,
      task: task,
    });

    await this.commentRepository.save(newComment);

    // Return the updated task object
    return task;
  }


  async getAllcomment() {
    return this.commentRepository.find(
      {
        relations: ["author"],
        order: {
          createdAt: "ASC"
        }
      }
    );
  }
  async getCommentById(id: number) {
    const comment = await this.commentRepository.findOneBy({ id });
    if (comment) {
      return comment;
    }
    throw new HttpException(
      `Comment with this id does not exist`,
      HttpStatus.NOT_FOUND
    );
  }

  async deleteComment(id: number) {
    await this.getCommentById(id)
    await this.commentRepository.delete(id);
    return { message: "Deleted successfully!" };
  }
}
