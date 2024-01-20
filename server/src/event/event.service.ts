// events/events.service.ts
import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';


@Injectable()
export class EventService {
  private readonly clients: Map<string, Socket[]> = new Map();

  subscribeToRoom(room: string, client: Socket) {
    if (!this.clients.has(room)) {
      this.clients.set(room, []);
    }
    this.clients.get(room).push(client);
  }

  generateSampleNotifications() {
    const sampleNotifications = [
      {
        id: 1,
        message: "New message from User A",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        message: "Reminder: Meeting at 2 PM",
        timestamp: new Date().toISOString(),
      },
      {
        id: 3,
        message: "You have 3 new emails",
        timestamp: new Date().toISOString(),
      },
      {
        id: 4,
        message: "Weather update: Rain expected tomorrow",
        timestamp: new Date().toISOString(),
      },
      {
        id: 5,
        message: "Payment received from Client X",
        timestamp: new Date().toISOString(),
      },
    ];

    return sampleNotifications;
  }
  
}
