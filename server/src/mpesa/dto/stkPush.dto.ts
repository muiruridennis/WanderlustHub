import {IsNotEmpty, IsNumber, IsString, Matches} from "class-validator";
export default class StkPushDTO {
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
  
    @IsNumber()
    @IsNotEmpty()
    tourId: number;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

}