import { UsersEntity } from '../../users/entities/user.entity';
export declare class DespesasEntity {
    id: number;
    entretenimento: string;
    alimentacao: string;
    userId: number;
    usersEntity: UsersEntity;
    educacao: string;
    saude: string;
    transporte: string;
    createdAt?: Date;
    deletedAt?: Date;
}
