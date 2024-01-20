import { Inject, forwardRef, Injectable  } from '@nestjs/common';
import { Socket } from 'socket.io';
import { NotificationGateway } from './notification.gateway';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => NotificationGateway))
    private notificationGateway: NotificationGateway
  ){}
  generateSampleNotifications(): { id: number; message: string; timestamp: string; title: string }[] {
    return [
      {
        id: 1,
        message: "You have a new message from John",
        timestamp: "2023-10-15T08:30:00",
        title: "New Message",
      },
      {
        id: 2,
        message: "A new event has been scheduled",
        timestamp: "2023-10-16T10:15:00",
        title: "Event Reminder",
      },
      {
        id: 3,
        message: "You've been mentioned in a post",
        timestamp: "2023-10-17T14:45:00",
        title: "Mention Notification",
      },
      {
        id: 4,
        message: "A new user is suspended",
        timestamp: "2023-10-18T08:00:00",
        title: "Order Shipment",
      },
    ];

    
  }
  async notifyAdminsAboutNewBooking(newBooking: any){
    const message = `New booking made by ${newBooking?.user?.name}. Tour/Package: ${newBooking?.tour?.name}. Payment Status: ${newBooking?.status}`;
  
    // Use your notification gateway to send the message to admin users
    this.notificationGateway.notifyAdmins(message);
  }
  
}
