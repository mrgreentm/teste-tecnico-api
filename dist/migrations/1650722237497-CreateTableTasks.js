"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTasks1650722237497 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableTasks1650722237497 {
    constructor() {
        this.tableTasks = new typeorm_1.Table({
            name: 'tasks',
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
                    name: 'title',
                    type: 'VARCHAR',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'VARCHAR',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'priority',
                    type: 'ENUM',
                    enum: ['Alta', 'Média', 'Baixa'],
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
        this.tasksUserForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_tasks_user_id',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            referencedTableName: 'users',
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.tableTasks);
        await queryRunner.createForeignKey(this.tableTasks, this.tasksUserForeignKey);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableTasks);
        await queryRunner.dropForeignKey(this.tableTasks, this.tasksUserForeignKey);
    }
}
exports.CreateTableTasks1650722237497 = CreateTableTasks1650722237497;
//# sourceMappingURL=1650722237497-CreateTableTasks.js.map