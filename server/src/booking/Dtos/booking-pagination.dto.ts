import { IsInt, Min, IsOptional, IsNumberString  } from 'class-validator';

export class BookingPaginationDto {
    @IsInt()
    @Min(1)
    @IsOptional()
    page?: number;

    @IsInt()
    @Min(1)
    @IsOptional()
    perPage?: number;
}