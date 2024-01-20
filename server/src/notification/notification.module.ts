import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventsController } from './notification.controller';
import {NotificationGateway } from './notification.gateway';


@Module({
  providers: [NotificationService, NotificationGateway],
  controllers: [EventsController],
  exports: [NotificationService, NotificationGateway]
})
export class NotificationModule { }
