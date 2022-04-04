import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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

  @Column({ nullable: true })
  priority: string;

  @CreateDateColumn({ nullable: true })
  createdAt?: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
