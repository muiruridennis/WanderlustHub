import { Logger } from "@nestjs/common";

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EventService } from './event.service';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:8081',
  },
})
export class EventGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger("EventGateway")
  @WebSocketServer()
  server: Server;

  constructor(private readonly eventService: EventService) { }

  afterInit() {
    this.logger.log("webSocketGateway initialized")
  }
  handleConnection() {

    this.logger.log(`Client connected`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnected: ${client.id}`);
  }
  @SubscribeMessage('sendNotifications')
  async handleSendNotification(client: Socket) {
    // const newNotifications = this.eventService.generateSampleNotifications();
    client.emit('receiveNotifications', "newNotifications");
  }
}
