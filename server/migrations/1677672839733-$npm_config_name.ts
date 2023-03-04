import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1677672839733 implements MigrationInterface {
    name = '$npmConfigName1677672839733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mpesa" ("id" SERIAL NOT NULL, "amountPaid" integer NOT NULL, "payingPhoneNumber" character varying NOT NULL, "transactionDate" TIMESTAMP, "mpesaReceiptNumber" character varying, "merchantRequestID" character varying NOT NULL, "checkoutRequestID" character varying NOT NULL, CONSTRAINT "PK_9c106152c1527aeb1a524709442" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "amountPaid"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "merchantRequestID"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "checkoutRequestID"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "responseDescription"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "paymentId" integer`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "UQ_14223cf3883f8f74019bf60ded5" UNIQUE ("paymentId")`);
        await queryRunner.query(`ALTER TYPE "public"."booking_status_enum" RENAME TO "booking_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."booking_status_enum" AS ENUM('Pending', 'Approved', 'Rejected')`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" TYPE "public"."booking_status_enum" USING "status"::"text"::"public"."booking_status_enum"`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" SET DEFAULT 'Pending'`);
        await queryRunner.query(`DROP TYPE "public"."booking_status_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."booking_status_enum" RENAME TO "booking_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."booking_status_enum" AS ENUM('Pending', 'Approved', 'Rejected')`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" TYPE "public"."booking_status_enum" USING "status"::"text"::"public"."booking_status_enum"`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" SET DEFAULT 'Pending'`);
        await queryRunner.query(`DROP TYPE "public"."booking_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_14223cf3883f8f74019bf60ded5" FOREIGN KEY ("paymentId") REFERENCES "mpesa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_14223cf3883f8f74019bf60ded5"`);
        await queryRunner.query(`CREATE TYPE "public"."booking_status_enum_old" AS ENUM('Pending', 'Success', 'Failure')`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" TYPE "public"."booking_status_enum_old" USING "status"::"text"::"public"."booking_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" SET DEFAULT 'Pending'`);
        await queryRunner.query(`DROP TYPE "public"."booking_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."booking_status_enum_old" RENAME TO "booking_status_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."booking_status_enum_old" AS ENUM('Pending', 'Success', 'Failure')`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" TYPE "public"."booking_status_enum_old" USING "status"::"text"::"public"."booking_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "status" SET DEFAULT 'Pending'`);
        await queryRunner.query(`DROP TYPE "public"."booking_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."booking_status_enum_old" RENAME TO "booking_status_enum"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "UQ_14223cf3883f8f74019bf60ded5"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "paymentId"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "responseDescription" character varying`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "checkoutRequestID" character varying`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "merchantRequestID" character varying`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "amountPaid" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "phoneNumber" character varying`);
        await queryRunner.query(`DROP TABLE "mpesa"`);
    }

}
