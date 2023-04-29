import { IsEnum, IsString, IsNumber, IsDate, IsOptional } from "class-validator";

export default class CreateCommentDto {
    @IsString()
    comment: string; 

    @IsNumber()
    taskId: number;
}