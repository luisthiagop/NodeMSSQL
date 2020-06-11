/* eslint-disable class-methods-use-this */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CriaTabelaTelefone1591836301778
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'telefone',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'numero',
            type: 'varchar',
          },
          {
            name: 'cliente_id',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'telefone',
      new TableForeignKey({
        name: 'fk_cliente_telefone',
        columnNames: ['cliente_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cliente',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('telefone', 'fk_cliente_telefone');
    await queryRunner.dropTable('telefone');
  }
}
