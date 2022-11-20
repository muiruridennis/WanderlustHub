import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientsRepository} from "./clients-repository";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([ClientsRepository])],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
