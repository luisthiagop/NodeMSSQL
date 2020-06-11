/* eslint-disable class-methods-use-this */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CriaTabelaEndereco1591835276654
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'endereco',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'logradouro',
            type: 'varchar',
          },
          {
            name: 'numero',
            type: 'int',
          },
          {
            name: 'bairro',
            type: 'varchar',
          },
          {
            name: 'cidade',
            type: 'varchar',
          },
          {
            name: 'estado',
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
      'endereco',
      new TableForeignKey({
        name: 'fk_cliente_endereco',
        columnNames: ['cliente_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cliente',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('endereco', 'fk_cliente_endereco');
    await queryRunner.dropTable('endereco');
  }
}
