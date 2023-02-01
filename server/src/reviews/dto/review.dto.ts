import { IsString, IsNumber } from "class-validator"
export default class ReviewDto {
    @IsString()
    review: string;

    @IsNumber()
    rating: number;
}