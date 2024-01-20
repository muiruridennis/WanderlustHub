import { IsEnum, IsString, IsNumber, IsOptional, IsDateString } from "class-validator";
import { Difficulty } from '../difficulty';

export default class updateTourDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    name: string;

    // @IsString()
    // duration: string;

    @IsEnum(Difficulty)
    Difficulty: Difficulty;

    @IsNumber()
    price: number

    @IsDateString()
    startDate: Date

    @IsString()
    summary: string;

    @IsString()
    imageCover: string;
}