import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import User from './user.entity';
// import { NotificationType } from "../-enum";

@Entity()
class NotificationPreference {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ default: true })
    public emailEnabled: boolean;

    @Column({ default: true })
    public smsEnabled: boolean;

    @Column({ default: true })
    public inAppNotificationEnabled: boolean;

    // @Column({ type: 'enum', enum: NotificationType, default: NotificationType.BOOKING_UPDATE })
    // notificationType: NotificationType;

    @OneToOne(() => User, (user) => user.notificationPreferences)
    @JoinColumn()
    user: User;
}

export default NotificationPreference;
