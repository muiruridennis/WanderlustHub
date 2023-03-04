import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1677695333600 implements MigrationInterface {
    name = '$npmConfigName1677695333600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mpesa" ALTER COLUMN "transactionDate" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "mpesa" DROP COLUMN "checkoutRequestID"`);
        await queryRunner.query(`ALTER TABLE "mpesa" ADD "checkoutRequestID" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "mpesa" ALTER COLUMN "transactionDate" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mpesa" ALTER COLUMN "transactionDate" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "mpesa" DROP COLUMN "checkoutRequestID"`);
        await queryRunner.query(`ALTER TABLE "mpesa" ADD "checkoutRequestID" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "mpesa" ALTER COLUMN "transactionDate" DROP DEFAULT`);
    }

}
