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
        relations: ["author"]
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
    throw new HttpException(`task  does not exist`, HttpStatus.NOT_FOUND);
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


  async updateTask(id: number, task: UpdateTaskDto) {
    await this.findTask(id)
    await this.taskRepository.update(id, task);
    return {message:" task updated successfully"};
  }

  async deleteTask(id: number) {
    await this.findTask(id)
    await this.taskRepository.delete(id);
    return { Message: "Task deleted successfully" };
  }

  async createChecklist(checklist: CreateChecklistDto, taskId: number) {
    const task = await this.getTaskById(taskId);
    const newChecklist = this.checklistRepository.create({
      ...checklist,
      task
    });
    await this.checklistRepository.save(newChecklist);
    return task;
  }
  async getAllChecklist() {
    return this.checklistRepository.find(
      {
        relations: ["task"]
      }
    );
  }
  async getChecklistById(id: number) {
    const checkList = await this.checklistRepository.findOneBy({ id });
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
    const checklist = await this.taskRepository.findOne(
      {
        where: { id }
      });
    if (!checklist) {
      throw new HttpException(`checklist  does not exist`, HttpStatus.NOT_FOUND);
    } await this.checklistRepository.delete(id);
    return { message: 'checklist deleted successfully' }
  }


  async createComment(comment: CreateCommentDto, taskId: number, user: User,) {
    const task = await this.getTaskById(taskId);
    const newComment = await this.commentRepository.create({
      ...comment,
      task,
      author: user
    })
    await this.commentRepository.save(newComment)

    return task;
  }
  async getAllcomment() {
    return this.commentRepository.find(
      {
        relations: ["author"]
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
