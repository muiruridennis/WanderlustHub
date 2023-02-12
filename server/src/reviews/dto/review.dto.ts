import { IsString, IsNumber, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import ObjectWithIdDTO from 'src/utils/types/objectWithId.dto';

export default class CreateReviewDto {
    @IsString()
    review: string;

    @IsNumber()
    rating: number;

    // @ValidateNested()
    // @Type(() => ObjectWithIdDTO)
    // tour: ObjectWithIdDTO;
}