"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1650722081185 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUsers1650722081185 {
    constructor() {
        this.userTable = new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'INTEGER',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'VARCHAR',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'VARCHAR',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'password',
                    type: 'VARCHAR',
                    length: '255',
                    isNullable: false,
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
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.userTable);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.userTable);
    }
}
exports.CreateTableUsers1650722081185 = CreateTableUsers1650722081185;
//# sourceMappingURL=1650722081185-CreateTableUsers.js.map