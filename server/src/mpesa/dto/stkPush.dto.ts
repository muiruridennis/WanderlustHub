import {IsNotEmpty, IsNumber, IsString, Matches} from "class-validator";
export default class StkPush {
    @IsString()
    @IsNotEmpty()
    @Matches(/^\+[1-9]\d{1,14}$/)
    phoneNumber: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

}