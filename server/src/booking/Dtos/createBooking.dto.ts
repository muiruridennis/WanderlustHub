import { IsString, IsNotEmpty, Matches, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^\+[1-9]\d{1,14}$/)
  phoneNumber: string;

  // @IsNumber()
  // @IsNotEmpty()
  // tourId: number;

}

export default CreateBookingDto;