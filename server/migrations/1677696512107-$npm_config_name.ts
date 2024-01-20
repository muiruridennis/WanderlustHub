import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1677696512107 implements MigrationInterface {
    name = '$npmConfigName1677696512107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mpesa" DROP COLUMN "checkoutRequestID"`);
        await queryRunner.query(`ALTER TABLE "mpesa" ADD "checkoutRequestID" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mpesa" DROP COLUMN "checkoutRequestID"`);
        await queryRunner.query(`ALTER TABLE "mpesa" ADD "checkoutRequestID" real NOT NULL`);
    }

}
