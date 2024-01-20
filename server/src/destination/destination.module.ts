import { Module } from '@nestjs/common';
import { DestinationsController } from './destination.controller';
import { DestinationsService } from './destination.service';

@Module({
  controllers: [DestinationsController],
  providers: [DestinationsService]
})
export class DestinationsModule {}
