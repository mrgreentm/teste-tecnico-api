import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ nullable: true, name: 'created_at' })
  createdAt?: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt?: Date;
}
