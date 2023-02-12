import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1675925763161 implements MigrationInterface {
    name = '$npmConfigName1675925763161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tour" ADD "etinerary" text array`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_de57b596937c3f0ee832dc2372a"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_34413365b39e3bf5bea866569b4"`);
        await queryRunner.query(`ALTER TABLE "review" ALTER COLUMN "tourId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ALTER COLUMN "reviewerId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ALTER COLUMN "tourId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ALTER COLUMN "reviewerId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_de57b596937c3f0ee832dc2372a" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_34413365b39e3bf5bea866569b4" FOREIGN KEY ("reviewerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_34413365b39e3bf5bea866569b4"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_de57b596937c3f0ee832dc2372a"`);
        await queryRunner.query(`ALTER TABLE "review" ALTER COLUMN "reviewerId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ALTER COLUMN "tourId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ALTER COLUMN "reviewerId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ALTER COLUMN "tourId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_34413365b39e3bf5bea866569b4" FOREIGN KEY ("reviewerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_de57b596937c3f0ee832dc2372a" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tour" DROP COLUMN "etinerary"`);
    }

}
