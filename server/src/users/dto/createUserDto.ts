import { IsEmail, IsString, IsArray, IsEnum } from 'class-validator';
import Permission from "../.././utils/types/permission.type"

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

   @IsEnum(Permission, { each: true })
   permissions?: Permission[];
}