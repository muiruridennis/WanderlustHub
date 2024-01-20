import { IsString, IsDateString, IsOptional } from 'class-validator';

export class UpdateCustomEventDto {
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsDateString()
    startDate: Date;

    @IsOptional()
    @IsDateString()
    endDate: Date;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    allDay: boolean;
}
