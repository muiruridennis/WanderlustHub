import {  IsString, IsBoolean, IsOptional  } from "class-validator";

export  class CreateChecklistDto {
    @IsString()
    title: string;
  
    @IsBoolean()
    isChecked: boolean;
}

export  class UpdateChecklistDto {
    @IsOptional()
    @IsString()
    title: string;
  
    @IsOptional()
    @IsBoolean()
    isChecked: boolean;
}