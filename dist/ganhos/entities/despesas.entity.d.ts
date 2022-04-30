import { UsersEntity } from '../../users/entities/user.entity';
export declare class GanhosEntity {
    id: number;
    ganho: string;
    userId: number;
    usersEntity: UsersEntity;
    createdAt?: Date;
    deletedAt?: Date;
}
