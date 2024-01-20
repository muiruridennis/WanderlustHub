import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1677695896555 implements MigrationInterface {
    name = '$npmConfigName1677695896555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mpesa" ("id" SERIAL NOT NULL, "amountPaid" integer NOT NULL, "payingPhoneNumber" character varying NOT NULL, "transactionDate" TIMESTAMP DEFAULT now(), "mpesaReceiptNumber" character varying, "merchantRequestID" character varying NOT NULL, "checkoutRequestID" real NOT NULL, CONSTRAINT "PK_9c106152c1527aeb1a524709442" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking" ("id" SERIAL NOT NULL, "status" "public"."booking_status_enum" NOT NULL DEFAULT 'Pending', "bookedAtDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "paymentId" integer, "userId" integer, "tourId" integer, CONSTRAINT "REL_14223cf3883f8f74019bf60ded" UNIQUE ("paymentId"), CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_14223cf3883f8f74019bf60ded5" FOREIGN KEY ("paymentId") REFERENCES "mpesa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_336b3f4a235460dc93645fbf222" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_c7cbbc825f4a9eb63d6fa130f56" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_c7cbbc825f4a9eb63d6fa130f56"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_336b3f4a235460dc93645fbf222"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_14223cf3883f8f74019bf60ded5"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TABLE "mpesa"`);
    }

}
