import { IsString, IsNotEmpty, IsEmail, Matches } from 'class-validator';

export class RegisterUserstDTO {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    confirmPassword: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    // @Matches(/^\+[1-9]\d{1,14}$/)
    phoneNumber: string;
}