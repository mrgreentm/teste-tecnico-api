import { DespesasInterface } from './interfaces/despesas-interface';
import { Repository } from 'typeorm';
import { GanhosEntity } from './entities/despesas.entity';
import { DespesasUpdate } from './interfaces/despesas-update';
import { DespesasCreateDto } from './dtos/despesas-create.dto';
export declare class DespesasService {
    private despesasRepository;
    constructor(despesasRepository: Repository<GanhosEntity>);
    findAll(): Promise<DespesasInterface[]>;
    findOne(id: number): Promise<DespesasInterface>;
    create(despesa: DespesasCreateDto): Promise<DespesasInterface>;
    update(id: number, despesa: DespesasUpdate): Promise<any>;
    delete(id: number): Promise<void>;
}
