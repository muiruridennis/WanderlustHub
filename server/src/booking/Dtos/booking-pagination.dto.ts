import { IsString, IsOptional } from 'class-validator';

export class BookingPaginationDto {
    @IsOptional()
    @IsString()
    page?: string;

    @IsOptional()
    @IsString()
    perPage?: string;
}



