import { Module, Injectable } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KanbanService } from './kanban.service';
import { KanbanController } from './kanban.controller';
import Task  from './entity/task.entity';
import Checklist from './entity/checklist.entity';
import Comment from './entity/comment.entity';

@Injectable()// hadn't yet been added
@Module({
  imports: [TypeOrmModule.forFeature([Task, Checklist, Comment])],
  providers: [KanbanService],
  controllers: [KanbanController],
})
export class KanbanModule {}
