import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1701586932431 implements MigrationInterface {
    name = '$npmConfigName1701586932431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notification_preference" ("id" SERIAL NOT NULL, "emailEnabled" boolean NOT NULL DEFAULT true, "smsEnabled" boolean NOT NULL DEFAULT true, "inAppNotificationEnabled" boolean NOT NULL DEFAULT true, "notificationType" "public"."notification_preference_notificationtype_enum" NOT NULL DEFAULT 'bookingupdate', "userId" integer, CONSTRAINT "REL_c8721bd56ae600308745ad4974" UNIQUE ("userId"), CONSTRAINT "PK_ba8d816b10f3dcfcd2e71ce5776" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_permissions_enum" AS ENUM('CreateTour')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying, "isPhoneNumberConfirmed" boolean NOT NULL DEFAULT false, "permissions" "public"."user_permissions_enum" array NOT NULL DEFAULT '{}', "password" character varying, "isEmailConfirmed" boolean NOT NULL DEFAULT false, "isRegisteredWithGoogle" boolean NOT NULL DEFAULT false, "currentHashedRefreshToken" character varying, "resetLink" character varying, "addressId" integer, "profileId" integer, "notificationPreferencesId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"), CONSTRAINT "REL_9466682df91534dd95e4dbaa61" UNIQUE ("profileId"), CONSTRAINT "REL_3c60260ce0a4a18aaebccd63a6" UNIQUE ("notificationPreferencesId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "clientFrom" TIMESTAMP NOT NULL DEFAULT now(), "addressId" integer, "profileId" integer, CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "REL_6e6c7c79fbf5ab39520cd1723e" UNIQUE ("addressId"), CONSTRAINT "REL_dc97f7576f8f410c500eac037e" UNIQUE ("profileId"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppNotificationEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppNotificationEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TYPE "public"."notification_preference_notificationtype_enum" RENAME TO "notification_preference_notificationtype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."notification_preference_notificationtype_enum" AS ENUM('booking_update', 'promotions', 'news_alert')`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" TYPE "public"."notification_preference_notificationtype_enum" USING "notificationType"::"text"::"public"."notification_preference_notificationtype_enum"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" SET DEFAULT 'booking_update'`);
        await queryRunner.query(`DROP TYPE "public"."notification_preference_notificationtype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "smsEnabled" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP CONSTRAINT "REL_c8721bd56ae600308745ad4974"`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_30cb9d78297c1f2a2e07df1a616" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_276779da446413a0d79598d4fbd" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "custom_event" ADD CONSTRAINT "FK_9a87cd2db0a6dadfa8ca8f62c9b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD CONSTRAINT "FK_c8721bd56ae600308745ad49744" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9466682df91534dd95e4dbaa616" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_3c60260ce0a4a18aaebccd63a62" FOREIGN KEY ("notificationPreferencesId") REFERENCES "notification_preference"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_34413365b39e3bf5bea866569b4" FOREIGN KEY ("reviewerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_336b3f4a235460dc93645fbf222" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_6e6c7c79fbf5ab39520cd1723e2" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_dc97f7576f8f410c500eac037ed" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_dc97f7576f8f410c500eac037ed"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_6e6c7c79fbf5ab39520cd1723e2"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_336b3f4a235460dc93645fbf222"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_34413365b39e3bf5bea866569b4"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_3c60260ce0a4a18aaebccd63a62"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9466682df91534dd95e4dbaa616"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP CONSTRAINT "FK_c8721bd56ae600308745ad49744"`);
        await queryRunner.query(`ALTER TABLE "custom_event" DROP CONSTRAINT "FK_9a87cd2db0a6dadfa8ca8f62c9b"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_276779da446413a0d79598d4fbd"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_30cb9d78297c1f2a2e07df1a616"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD CONSTRAINT "REL_c8721bd56ae600308745ad4974" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "smsEnabled" SET DEFAULT true`);
        await queryRunner.query(`CREATE TYPE "public"."notification_preference_notificationtype_enum_old" AS ENUM('bookingupdate', 'promotions', 'newsalert')`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" TYPE "public"."notification_preference_notificationtype_enum_old" USING "notificationType"::"text"::"public"."notification_preference_notificationtype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ALTER COLUMN "notificationType" SET DEFAULT 'bookingupdate'`);
        await queryRunner.query(`DROP TYPE "public"."notification_preference_notificationtype_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."notification_preference_notificationtype_enum_old" RENAME TO "notification_preference_notificationtype_enum"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" DROP COLUMN "inAppNotificationEnabled"`);
        await queryRunner.query(`ALTER TABLE "notification_preference" ADD "inAppNotificationEnabled" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_permissions_enum"`);
        await queryRunner.query(`DROP TABLE "notification_preference"`);
    }

}
