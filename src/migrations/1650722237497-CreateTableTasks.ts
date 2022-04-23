import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableTasks1650722237497 implements MigrationInterface {
  private tableTasks: Table = new Table({
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

  private tasksUserForeignKey = new TableForeignKey({
    name: 'fk_tasks_user_id',
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.tableTasks);
    await queryRunner.createForeignKey(
      this.tableTasks,
      this.tasksUserForeignKey,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableTasks);
    await queryRunner.dropForeignKey(this.tableTasks, this.tasksUserForeignKey);
  }
}
