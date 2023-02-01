import { Module, forwardRef, Injectable } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import Client from "./entity/client.entity";
import {Profile} from "./entity/profile.entity";
import Address from "./entity/address.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Injectable()
@Module({
  imports: [ TypeOrmModule.forFeature([Client, Profile, Address])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
