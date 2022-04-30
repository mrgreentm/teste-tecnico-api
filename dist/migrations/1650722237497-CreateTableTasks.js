"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTasks1650722237497 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableTasks1650722237497 {
    constructor() {
        this.tableDespesas = new typeorm_1.Table({
            name: 'despesas',
            columns: [
                {
                    name: 'id',
                    type: 'INTEGER',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'user_id',
                    type: 'INTEGER',
                    isNullable: true,
                },
                {
                    name: 'entretenimento',
                    type: 'INTEGER',
                    isNullable: false,
                },
                {
                    name: 'alimentacao',
                    type: 'INTEGER',
                    isNullable: true,
                },
                {
                    name: 'educacao',
                    type: 'INTEGER',
                    isNullable: true,
                },
                {
                    name: 'saude',
                    type: 'INTEGER',
                    isNullable: true,
                },
                {
                    name: 'transporte',
                    type: 'INTEGER',
                    isNullable: true,
                },
                {
                    name: 'ganhos',
                    type: 'INTEGER',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'TIMESTAMP',
                    default: 'NOW()',
                },
                {
                    name: 'deleted_at',
                    type: 'TIMESTAMP',
                    isNullable: true,
                },
            ],
        });
        this.despesasUserForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_despesas_user_id',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            referencedTableName: 'users',
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.tableDespesas);
        await queryRunner.createForeignKey(this.tableDespesas, this.despesasUserForeignKey);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableDespesas);
        await queryRunner.dropForeignKey(this.tableDespesas, this.despesasUserForeignKey);
    }
}
exports.CreateTableTasks1650722237497 = CreateTableTasks1650722237497;
//# sourceMappingURL=1650722237497-CreateTableTasks.js.map