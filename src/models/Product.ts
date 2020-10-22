import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('produtos')
export default class Product {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    tag: string;

    @Column()
    price: number;

    @Column()
    amount: number;

    @Column()
    dueDate: string;
}