import {IsString, IsNotEmpty} from 'class-validator';

export class ResetPasswordDto {
    @IsNotEmpty()
    @IsString()
    resetLink: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}