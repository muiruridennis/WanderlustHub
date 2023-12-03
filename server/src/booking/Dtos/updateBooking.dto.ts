import { IsEnum, IsOptional } from 'class-validator';
import { Status } from '../enums';

export class UpdateBookingDto {
  @IsEnum(Status, { message: 'Invalid status value' })
  @IsOptional()
  status?: Status;
}