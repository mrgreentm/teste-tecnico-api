import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTableTasks1650722237497 implements MigrationInterface {
    private tableDespesas;
    private despesasUserForeignKey;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
