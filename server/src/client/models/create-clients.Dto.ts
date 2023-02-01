import Profile from './createProfileDto';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    lastPackage: string;

    @IsString()
    group: string;
    
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
}
export default CreateClientDto;
