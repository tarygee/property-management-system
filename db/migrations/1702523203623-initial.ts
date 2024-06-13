import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1702523203623 implements MigrationInterface {
  name = 'Initial1702523203623';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "status"`);
    await queryRunner.query(
      `ALTER TABLE "property" ADD "quantity" integer NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "category"`);
    await queryRunner.query(
      `CREATE TYPE "public"."property_category_enum" AS ENUM('furniture', 'electronic')`,
    );
    await queryRunner.query(
      `ALTER TABLE "property" ADD "category" "public"."property_category_enum" NOT NULL DEFAULT 'electronic'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "category"`);
    await queryRunner.query(`DROP TYPE "public"."property_category_enum"`);
    await queryRunner.query(
      `ALTER TABLE "property" ADD "category" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "quantity"`);
    await queryRunner.query(
      `ALTER TABLE "property" ADD "status" character varying NOT NULL`,
    );
  }
}
