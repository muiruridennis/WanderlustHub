import { IsEmail, IsString, IsNotEmpty, Matches, IsOptional, IsEnum } from 'class-validator';

import { UserRole } from "./roles.interface"
export class CreateUserDto {
   @IsString()
   firstName: string;

   @IsString()
   lastName: string;

   @IsEmail()
   email: string;

   @IsString()
   password: string;

   @IsString()
   confirmPassword: string;

   @IsString()
   resetLink: string;

   @IsEnum(UserRole)
   role?: UserRole;
}