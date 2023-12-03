import { IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
  tourId: number; 
 
  @IsString()
  paymentMethod: string;

  @IsNumber()
  amount: number;

}


