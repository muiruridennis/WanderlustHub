// src/events/events.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('events')
export class EventsController {
    constructor(private readonly notificationsService: NotificationService) { }

    // @Post()
    // async createEvent(@Body() eventData: any) {
    //     try {
    //         const createdEvent = await this.notificationsService.sendToRoom(eventData);
    //         return { success: true, data: createdEvent };
    //     } catch (error) {
    //         return { success: false, error: 'Failed to create event' };
    //     }
    // }
}
