import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1701594102880 implements MigrationInterface {
    name = '$npmConfigName1701594102880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "notificationType"`);
        await queryRunner.query(`DROP TYPE "public"."notification_preference_notificationtype_enum"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppNotificationEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppNotificationEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "notificationType" "public"."notification_preference_notificationtype_enum" NOT NULL DEFAULT 'booking_update'`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP CONSTRAINT "FK_c8721bd56ae600308745ad49744"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD CONSTRAINT "UQ_c8721bd56ae600308745ad49744" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TYPE "public"."user_permissions_enum" RENAME TO "user_permissions_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."user_permissions_enum" AS ENUM('canAccessAdminDashboard', 'isSuperAdmin', 'DeletePost', 'canBookTour', 'canAccesClientsProfile')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" TYPE "public"."user_permissions_enum"[] USING "permissions"::"text"::"public"."user_permissions_enum"[]`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" SET DEFAULT '{}'`);
        await queryRunner.query(`DROP TYPE "public"."user_permissions_enum_old"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD CONSTRAINT "UQ_c8721bd56ae600308745ad49744" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TYPE "public"."user_permissions_enum" RENAME TO "user_permissions_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."user_permissions_enum" AS ENUM('canAccessAdminDashboard', 'isSuperAdmin', 'DeletePost', 'canBookTour', 'canAccesClientsProfile')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" TYPE "public"."user_permissions_enum"[] USING "permissions"::"text"::"public"."user_permissions_enum"[]`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" SET DEFAULT '{}'`);
        await queryRunner.query(`DROP TYPE "public"."user_permissions_enum_old"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "smsEnabled" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD CONSTRAINT "FK_c8721bd56ae600308745ad49744" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP CONSTRAINT "FK_c8721bd56ae600308745ad49744"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "smsEnabled" SET DEFAULT true`);
        await queryRunner.query(`CREATE TYPE "public"."user_permissions_enum_old" AS ENUM('CreateTour')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" TYPE "public"."user_permissions_enum_old"[] USING "permissions"::"text"::"public"."user_permissions_enum_old"[]`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" SET DEFAULT '{}'`);
        await queryRunner.query(`DROP TYPE "public"."user_permissions_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."user_permissions_enum_old" RENAME TO "user_permissions_enum"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP CONSTRAINT "UQ_c8721bd56ae600308745ad49744"`);
        await queryRunner.query(`CREATE TYPE "public"."user_permissions_enum_old" AS ENUM('CreateTour')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" TYPE "public"."user_permissions_enum_old"[] USING "permissions"::"text"::"public"."user_permissions_enum_old"[]`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "permissions" SET DEFAULT '{}'`);
        await queryRunner.query(`DROP TYPE "public"."user_permissions_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."user_permissions_enum_old" RENAME TO "user_permissions_enum"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP CONSTRAINT "UQ_c8721bd56ae600308745ad49744"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD CONSTRAINT "FK_c8721bd56ae600308745ad49744" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "notificationType"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppNotificationEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppNotificationEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`CREATE TYPE "public"."notification_preference_notificationtype_enum" AS ENUM('booking_update', 'promotions', 'news_alert')`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "notificationType" "public"."notification_preference_notificationtype_enum" NOT NULL DEFAULT 'booking_update'`);
    }

}
