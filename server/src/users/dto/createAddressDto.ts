import { IsNotEmpty, IsString } from 'class-validator';

export default class AddressDTO {
  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  country: string;
}
