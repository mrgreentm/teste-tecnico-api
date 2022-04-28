import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTableUsers1650722081185 implements MigrationInterface {
    private userTable;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
