import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Req,
    Patch,
    UseGuards,
    SerializeOptions
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './Dto/createTask.dto';
import { KanbanService } from './kanban.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import RequestWithUser from "../auth/requestWithUser.interface";
import CreateCommentDto from './Dto/comment.dto';
import { CreateChecklistDto, UpdateChecklistDto } from './Dto/checklist.dto';

@Controller('tasks')
// @SerializeOptions({
//     strategy: 'excludeAll'
//   })
export class KanbanController {
    constructor(private readonly kanbanService: KanbanService) { }

    @UseGuards(JwtAuthGuard)
    @Post("create")
    async createTask(@Body() task: CreateTaskDto, @Req() req: RequestWithUser) {
        return await this.kanbanService.createTask(task, req.user);
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return await this.kanbanService.getAllTasks();
    }

    @Get(':id')
    async findTask(@Param('id') id: number) {
        return await this.kanbanService.findTask(id);
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number) {
        return await this.kanbanService.deleteTask(id)
    }

    @Patch("update/:id")
    async updateTour(@Body() update: UpdateTaskDto, @Param("id") id: number) {
        return await this.kanbanService.updateTask(id, update);
    }

    @UseGuards(JwtAuthGuard)
    @Post('task/comment')
    async createComment(@Body() comment: CreateCommentDto, @Req() req: RequestWithUser) {
        return await this.kanbanService.createComment(comment, req.user);
    }


    @Get("task/comment")
    async findAllComments() {
        return await this.kanbanService.getAllcomment();
    }

    @Get('task/comment/:id')
    async findAComment(@Param('id') id: number) {
        return await this.kanbanService.getCommentById(id);
    }

    @Delete("task/comment/delete/:id")
    async deleteComment(@Param("id") id: number) {
        return await this.kanbanService.deleteComment(id)
    }

    // @UseGuards(JwtAuthGuard)
    // async createChecklist(@Body() checklist: CreateChecklistDto, taskId: number) {
    //     return await this.kanbanService.createChecklist(checklist, taskId);
    // }
    
    @UseGuards(JwtAuthGuard)
    @Post("task/checklist")
    async createChecklist(@Body() checklist: CreateChecklistDto) {
        return await this.kanbanService.createChecklist(checklist);
    }

    @Get("task/checklist")
    async findAllChecklists() {
        return await this.kanbanService.getAllChecklist();
    }

    @Get('task/checklist/:id')
    async findAChecklist(@Param('id') id: number) {
        return await this.kanbanService.getChecklistById(id);
    }

    @Delete("task/checklist/delete/:id")
    async deleteChecklist(@Param("id") id: number) {
        return await this.kanbanService.deleteChecklist(id)
    }

    @Patch("task/checklist/update/:id")
    async updateChecklist(@Body() update: UpdateChecklistDto, @Param("id") id: number) {
        await this.kanbanService.updateChecklist(id, update);
        return " Updated successfully!"
    }

}
