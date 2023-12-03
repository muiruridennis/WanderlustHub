import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Status, Gender } from '../-enum';
export default class CreateProfileDto {
  @IsOptional()
  @IsNumber()
  points: number;

  @IsOptional()
  @IsNumber()
  balance: number;

  @IsOptional()
  @IsEnum(Status)
  status: Status;
  
  @IsEnum(Gender)
  gender: Gender;

}


