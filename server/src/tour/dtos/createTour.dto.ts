import { IsEnum, IsString, IsNumber, IsNotEmpty, IsDateString } from "class-validator";
import { Difficulty } from '../difficulty';

export default class CreateTourDto {
    @IsString()
    name: string;

    @IsString({ each: true })
    // @IsNotEmpty()
    etinerary: string[];

    @IsEnum(Difficulty)
    difficulty: Difficulty;

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