import { IsString, IsNumber, ValidateNested } from "class-validator";
export default class CreateReviewDto {
    @IsString()
    review: string;

    @IsNumber()
    rating: number;
}