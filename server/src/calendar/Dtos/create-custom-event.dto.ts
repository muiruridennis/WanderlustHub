import { IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateCustomEventDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsDateString()
    startDate: Date;

    @IsNotEmpty()
    @IsDateString()
    endDate: Date;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    allDay: boolean;
}
