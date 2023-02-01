import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1675246940122 implements MigrationInterface {
    name = '$npmConfigName1675246940122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tour" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "price" integer NOT NULL, "summary" character varying NOT NULL, "imageCover" character varying, "Difficulty" "public"."tour_difficulty_enum" NOT NULL DEFAULT 'medium', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_972cd7fa4ec39286068130fa3f7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "review" ("id" SERIAL NOT NULL, "review" character varying NOT NULL, "rating" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tourId" integer, "reviewerId" integer, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "review_reviwerId_index" ON "review" ("reviewerId") `);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."booking_status_enum" AS ENUM('Completed', 'Pending')`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "status" "public"."booking_status_enum" NOT NULL DEFAULT 'Completed'`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "bookingPlatform" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "bookingPlatform" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_de57b596937c3f0ee832dc2372a" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_34413365b39e3bf5bea866569b4" FOREIGN KEY ("reviewerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_34413365b39e3bf5bea866569b4"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_de57b596937c3f0ee832dc2372a"`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "bookingPlatform" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ALTER COLUMN "bookingPlatform" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."booking_status_enum"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."review_reviwerId_index"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "tour"`);
    }

}
