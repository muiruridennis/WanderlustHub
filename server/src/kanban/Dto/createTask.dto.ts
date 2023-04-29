import { IsEnum, IsString, IsDateString, IsDate, IsOptional } from "class-validator";
import { Priority } from '../Priority';

export class CreateTaskDto {
    @IsString()
    title: string;

    @IsEnum(Priority)
    priority: Priority;

    @IsString()
    description: string;

    // @IsDate()
    @IsDateString()
    @IsOptional()
    dueDate?: Date;

    @IsString()
    assignedTo: string;

    @IsString()
    status: string;
}


export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsDateString()
    dueDate?: Date;

    @IsString()
    @IsOptional()
    assignedTo?: string;

    @IsOptional()
    @IsEnum(Priority)
    priority: Priority;

    @IsOptional()
    @IsString()
    status: string;
}