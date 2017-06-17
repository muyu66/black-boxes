import { Entity, PrimaryGeneratedColumn, Column, getConnection } from 'typeorm';
import { Base } from './Base';

@Entity()
export class Account extends Base {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account: string;

    @Column()
    password: string;

}