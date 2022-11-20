import{UserRole} from "./roles.interface"
export class CreateUserDto {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   confirmPassword: string;
   role?: UserRole;
}