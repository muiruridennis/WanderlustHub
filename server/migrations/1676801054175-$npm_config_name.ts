import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1676801054175 implements MigrationInterface {
    name = '$npmConfigName1676801054175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "points" integer NOT NULL, "rating" integer NOT NULL, "balance" integer NOT NULL, "status" character varying NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "group" character varying NOT NULL, "lastPackage" character varying NOT NULL, "clientFrom" TIMESTAMP NOT NULL DEFAULT now(), "addressId" integer, "profileId" integer, CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "REL_6e6c7c79fbf5ab39520cd1723e" UNIQUE ("addressId"), CONSTRAINT "REL_dc97f7576f8f410c500eac037e" UNIQUE ("profileId"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "local_file" ("id" SERIAL NOT NULL, "filename" character varying NOT NULL, "data" bytea NOT NULL, CONSTRAINT "PK_e391e00bc7475063fd45ee3f38d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_roles_enum" AS ENUM('admin', 'user', 'assadmin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying, "isPhoneNumberConfirmed" boolean NOT NULL DEFAULT false, "roles" "public"."user_roles_enum" NOT NULL DEFAULT 'user', "password" character varying, "isEmailConfirmed" boolean NOT NULL DEFAULT false, "isRegisteredWithGoogle" boolean NOT NULL DEFAULT false, "avatarId" integer, "currentHashedRefreshToken" character varying, "resetLink" character varying, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_58f5c71eaab331645112cf8cfa" UNIQUE ("avatarId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "review" ("id" SERIAL NOT NULL, "review" character varying NOT NULL, "rating" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tourId" integer, "reviewerId" integer, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."tour_difficulty_enum" AS ENUM('easy', 'medium', 'difficult')`);
        await queryRunner.query(`CREATE TABLE "tour" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "price" integer NOT NULL, "summary" character varying NOT NULL, "imageCover" character varying, "difficulty" "public"."tour_difficulty_enum" NOT NULL DEFAULT 'medium', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "etinerary" text array, CONSTRAINT "PK_972cd7fa4ec39286068130fa3f7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."booking_status_enum" AS ENUM('Pending', 'Success', 'Failure')`);
        await queryRunner.query(`CREATE TABLE "booking" ("id" SERIAL NOT NULL, "status" "public"."booking_status_enum" NOT NULL DEFAULT 'Pending', "phoneNumber" character varying, "bookedAtDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "amountPaid" integer NOT NULL, "merchantRequestID" character varying, "checkoutRequestID" character varying, "responseDescription" character varying, "userId" integer, "tourId" integer, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "destination" ("id" SERIAL NOT NULL, "desinationName" character varying, CONSTRAINT "PK_e45b5ee5788eb3c7f0ae41746e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "directors" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "idNumber" integer NOT NULL, "address" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "avatarId" integer, "statements" character varying NOT NULL, CONSTRAINT "UQ_815e5afdbf88f223fdf05f92ce7" UNIQUE ("idNumber"), CONSTRAINT "REL_c4fb5d311c9b21839ba59bd2cc" UNIQUE ("avatarId"), CONSTRAINT "PK_a9ae28f00c93801aa034a2c1773" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "feature_flag" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "name" character varying NOT NULL, "isEnabled" boolean NOT NULL, CONSTRAINT "UQ_0cb1810eca363db1e0bf13c3cf3" UNIQUE ("name"), CONSTRAINT "PK_f390205410d884907604a90c0f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" SERIAL NOT NULL, "paymentAmount" integer NOT NULL, "referenceNumber" character varying NOT NULL, "paymentSuccess" boolean NOT NULL DEFAULT false, "approved" boolean NOT NULL DEFAULT false, "paymentDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_6e6c7c79fbf5ab39520cd1723e2" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_dc97f7576f8f410c500eac037ed" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_58f5c71eaab331645112cf8cfa5" FOREIGN KEY ("avatarId") REFERENCES "local_file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_de57b596937c3f0ee832dc2372a" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_34413365b39e3bf5bea866569b4" FOREIGN KEY ("reviewerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_336b3f4a235460dc93645fbf222" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_c7cbbc825f4a9eb63d6fa130f56" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "directors" ADD CONSTRAINT "FK_c4fb5d311c9b21839ba59bd2ccf" FOREIGN KEY ("avatarId") REFERENCES "local_file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "directors" DROP CONSTRAINT "FK_c4fb5d311c9b21839ba59bd2ccf"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_c7cbbc825f4a9eb63d6fa130f56"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_336b3f4a235460dc93645fbf222"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_34413365b39e3bf5bea866569b4"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_de57b596937c3f0ee832dc2372a"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_58f5c71eaab331645112cf8cfa5"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_dc97f7576f8f410c500eac037ed"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_6e6c7c79fbf5ab39520cd1723e2"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "feature_flag"`);
        await queryRunner.query(`DROP TABLE "directors"`);
        await queryRunner.query(`DROP TABLE "destination"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TYPE "public"."booking_status_enum"`);
        await queryRunner.query(`DROP TABLE "tour"`);
        await queryRunner.query(`DROP TYPE "public"."tour_difficulty_enum"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_roles_enum"`);
        await queryRunner.query(`DROP TABLE "local_file"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
