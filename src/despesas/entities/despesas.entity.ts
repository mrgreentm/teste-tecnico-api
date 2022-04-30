import { UsersEntity } from '../../users/entities/user.entity';
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
export class DespesasEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'entretenimento', nullable: true })
  entretenimento: string;

  @Column({ nullable: true })
  alimentacao: string;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.id)
  @JoinColumn({ name: 'user_id' })
  usersEntity: UsersEntity;

  @Column({ nullable: true })
  educacao: string;

  @Column({ nullable: true })
  saude: string;

  @Column({ nullable: true })
  transporte: string;

  @CreateDateColumn({ nullable: true, name: 'created_at' })
  createdAt?: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt?: Date;
}
