import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableTasks1650722237497 implements MigrationInterface {
  private tableDespesas: Table = new Table({
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
        type: 'VARCHAR',
        length: '255',
        isNullable: false,
      },
      {
        name: 'alimentacao',
        type: 'VARCHAR',
        length: '255',
        isNullable: true,
      },
      {
        name: 'educacao',
        type: 'VARCHAR',
        length: '255',
        isNullable: true,
      },
      {
        name: 'saude',
        type: 'VARCHAR',
        length: '255',
        isNullable: true,
      },
      {
        name: 'transporte',
        type: 'VARCHAR',
        length: '255',
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

  private despesasUserForeignKey = new TableForeignKey({
    name: 'fk_despesas_user_id',
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.tableDespesas);
    await queryRunner.createForeignKey(
      this.tableDespesas,
      this.despesasUserForeignKey,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableDespesas);
    await queryRunner.dropForeignKey(this.tableDespesas, this.despesasUserForeignKey);
  }
}
