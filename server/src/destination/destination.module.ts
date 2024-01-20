import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { DestinationController } from './destination.controller';
import { DestinationService } from './destination.service';
import Destination from './entity/destination.entity';
import { LocalFileModule } from "../local-file/local-file.module"

@Module({
  imports: [TypeOrmModule.forFeature([Destination]), LocalFileModule,],
  controllers: [DestinationController],
  providers: [DestinationService]
})
export class DestinationsModule { }
