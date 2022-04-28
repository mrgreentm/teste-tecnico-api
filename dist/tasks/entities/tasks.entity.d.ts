import { UsersEntity } from './../../users/entities/user.entity';
export declare class Tasks {
    id: number;
    title: string;
    description: string;
    userId: number;
    usersEntity: UsersEntity;
    priority: string;
    createdAt?: Date;
    deletedAt?: Date;
}
