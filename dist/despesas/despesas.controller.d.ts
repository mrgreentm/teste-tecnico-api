import { DespesasUpdate } from './interfaces/despesas-update';
import { DespesasInterface } from './interfaces/despesas-interface';
import { DespesasService } from './despesas.service';
import { DespesasCreateDto } from './dtos/despesas-create.dto';
export declare class DespesasController {
    private service;
    constructor(service: DespesasService);
    findAll(): Promise<DespesasInterface[]>;
    findOne(id: number): Promise<DespesasInterface>;
    create(task: DespesasCreateDto): Promise<DespesasInterface>;
    delete(id: number): Promise<void>;
    update(id: number, task: DespesasUpdate): Promise<void>;
}
