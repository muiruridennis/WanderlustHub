import { Profile } from "../entity/profile.entity";
import Adress from "../entity/address.entity";
export default class CreateClientProfileDto {
    Points: number;
    rating: number;
    balance: number;
    status: string;
    gender: string;
    profile: Profile;
    adress: Adress;
  }


 