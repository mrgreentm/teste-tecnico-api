import { UsersEntity } from './../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title', nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.id)
  @JoinColumn({ name: 'user_id' })
  usersEntity: UsersEntity;

  @Column({ nullable: true })
  priority: string;

  @CreateDateColumn({ nullable: true, name: 'created_at' })
  createdAt?: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt?: Date;
}
