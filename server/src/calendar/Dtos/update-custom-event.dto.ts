import { Exclude } from 'class-transformer';
import { IsString, IsDateString, IsOptional } from 'class-validator';
export class UpdateCustomEventDto {
    @Exclude()
    id:number;

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
