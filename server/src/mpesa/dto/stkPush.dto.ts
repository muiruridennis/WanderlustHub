import {IsNotEmpty, IsNumber, IsOptional, IsString, Matches} from "class-validator";
export default class StkPushDTO {
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
  
    @IsNumber()
    @IsOptional()
    tourId: number;

    @IsNumber()
    @IsOptional()
    bookingId: number;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

}