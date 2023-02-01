import { IsEnum, IsString, IsNumber, IsDate, IsDateString } from "class-validator";
import { Difficulty } from '../Difficulty';

export default class CreateTourDto {
    @IsString()
    name: string;

    // @IsString()
    // duration: string;

    @IsEnum(Difficulty)
    Difficulty: Difficulty;

    @IsNumber()
    price: number

    @IsString()
    summary: string;

    @IsDateString()
    // @IsDate()
    startDate: Date

    @IsString()
    imageCover: string;
}