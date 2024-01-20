import { Logger } from "@nestjs/common";
import { Inject, forwardRef,  } from '@nestjs/common';

import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    MessageBody, ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NotificationService } from './notification.service';

@WebSocketGateway({
    cors: {
        origin: 'http://localhost:8081',
    },
})
export class NotificationGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly logger = new Logger("NotificationGateway");
    @WebSocketServer()
    server: Server;

    constructor(
        @Inject(forwardRef(() => NotificationService))
        private readonly notificationService: NotificationService
        ) { }

    afterInit() {
        this.logger.log("WebSocket Gateway initialized");
    }
    handleConnection(client: Socket) {
        this.logger.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client: Socket) {
        this.logger.log(`Client Disconnected: ${client.id}`);
    }

    @SubscribeMessage('request_all_notifications')
    async requestAllNotification() {
        const newNotifications = this.notificationService.generateSampleNotifications(); // Generate real notifications
        this.server.emit('send_all_notifications', newNotifications);
    }

    @SubscribeMessage('send_notification')
    async listenForNotifications(@MessageBody() body: any) {


        this.logger.log(body) 
        this.server.emit('receive_nofification', [ body]);
    }
    // @SubscribeMessage('send_notification')
    notifyAdmins(message: string) {
        // Broadcast the notification message to admin users
        this.server.emit('newBookingNotification', message);
      }

}
