import {  IsString, IsBoolean, IsOptional, IsNumber  } from "class-validator";

export  class CreateChecklistDto {
    @IsString()
    title: string;
  
    @IsBoolean()
    isChecked: boolean;

    @IsNumber()
    taskId:number
}

export  class UpdateChecklistDto {
    @IsOptional()
    @IsString()
    title: string;
  
    @IsOptional()
    @IsBoolean()
    isChecked: boolean;

    @IsNumber()
    taskId:number
}