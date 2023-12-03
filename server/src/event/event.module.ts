import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventGateway } from './event.gateway';

@Module({
  providers: [
    EventService,
    EventGateway
  ]
})
export class EventModule { }
