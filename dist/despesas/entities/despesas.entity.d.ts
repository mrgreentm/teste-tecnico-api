import { UsersEntity } from '../../users/entities/user.entity';
export declare class DespesasEntity {
    id: number;
    entretenimento: number;
    alimentacao: number;
    userId: number;
    usersEntity: UsersEntity;
    educacao: number;
    saude: number;
    transporte: number;
    ganhos: number;
    createdAt?: Date;
    deletedAt?: Date;
}
