import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1707889471981 implements MigrationInterface {
    name = '$npmConfigName1707889471981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP CONSTRAINT "FK_c8721bd56ae600308745ad49744"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppNotificationEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppNotificationEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "userId" integer`);
        await queryRunner.query(`ALTER TYPE "public"."notification_preference_notificationtype_enum" RENAME TO "notification_preference_notificationtype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."notification_preference_notificationtype_enum" AS ENUM('bookingupdate', 'promotions', 'newsalert')`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" TYPE "public"."notification_preference_notificationtype_enum" USING "notificationType"::"text"::"public"."notification_preference_notificationtype_enum"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" SET DEFAULT 'bookingupdate'`);
        await queryRunner.query(`DROP TYPE "public"."notification_preference_notificationtype_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."notification_preference_notificationtype_enum" RENAME TO "notification_preference_notificationtype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."notification_preference_notificationtype_enum" AS ENUM('bookingupdate', 'promotions', 'newsalert')`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" TYPE "public"."notification_preference_notificationtype_enum" USING "notificationType"::"text"::"public"."notification_preference_notificationtype_enum"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" SET DEFAULT 'bookingupdate'`);
        await queryRunner.query(`DROP TYPE "public"."notification_preference_notificationtype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "smsEnabled" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD CONSTRAINT "FK_c8721bd56ae600308745ad49744" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP CONSTRAINT "FK_c8721bd56ae600308745ad49744"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "smsEnabled" SET DEFAULT true`);
        await queryRunner.query(`CREATE TYPE "public"."notification_preference_notificationtype_enum_old" AS ENUM('booking_update', 'promotions', 'news_alert')`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" TYPE "public"."notification_preference_notificationtype_enum_old" USING "notificationType"::"text"::"public"."notification_preference_notificationtype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" SET DEFAULT 'booking_update'`);
        await queryRunner.query(`DROP TYPE "public"."notification_preference_notificationtype_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."notification_preference_notificationtype_enum_old" RENAME TO "notification_preference_notificationtype_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."notification_preference_notificationtype_enum_old" AS ENUM('booking_update', 'promotions', 'news_alert')`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" TYPE "public"."notification_preference_notificationtype_enum_old" USING "notificationType"::"text"::"public"."notification_preference_notificationtype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" SET DEFAULT 'booking_update'`);
        await queryRunner.query(`DROP TYPE "public"."notification_preference_notificationtype_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."notification_preference_notificationtype_enum_old" RENAME TO "notification_preference_notificationtype_enum"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppNotificationEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppNotificationEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD CONSTRAINT "FK_c8721bd56ae600308745ad49744" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
