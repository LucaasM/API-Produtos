import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProdutos1603390732817 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "produtos",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "tag",
                    type: "varchar"

                },
                {
                    name: "price",
                    type: "decimal"
                },
                {
                    name: "amount",
                    type: 'integer'
                },
                {
                    name: "dueDate",
                    type: 'varchar'
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos');
    }

}
