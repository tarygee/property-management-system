import { MigrationInterface, QueryRunner } from 'typeorm';

export class Damages1718270569049 implements MigrationInterface {
  name = 'Damages1718270569049';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "damages" ADD CONSTRAINT "UQ_8baf03e7989a47f860ed6cf8d9b" UNIQUE ("serialNumber")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "damages" DROP CONSTRAINT "UQ_8baf03e7989a47f860ed6cf8d9b"`,
    );
  }
}
