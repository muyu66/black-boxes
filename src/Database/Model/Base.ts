import { AbstractEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column, Index, CreateDateColumn } from 'typeorm';

@AbstractEntity()
export class Base {

    @CreateDateColumn({ name: 'created_at' })
    @Index()
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    @Index()
    updatedAt: Date;

    @Column('smallint', { length: 1, default: 0, name: 'is_deleted' })
    @Index()
    isDeleted: 0 | 1;

}