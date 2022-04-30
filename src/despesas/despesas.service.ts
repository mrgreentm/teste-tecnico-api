import { DespesasInterface } from './interfaces/despesas-interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DespesasEntity } from './entities/despesas.entity';
import { DespesasUpdate } from './interfaces/despesas-update';
import { DespesasCreateDto } from './dtos/despesas-create.dto';

@Injectable()
export class DespesasService {
  constructor(
    @InjectRepository(DespesasEntity)
    private despesasRepository: Repository<DespesasEntity>,
  ) {}

  async findAll(): Promise<DespesasInterface[]> {
    try {
      return await this.despesasRepository.find({
        relations: ['usersEntity'],
      });
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async findOne(id: number): Promise<DespesasInterface> {
    try {
      const despesa = await this.despesasRepository.findOne(id, {
        relations: ['usersEntity'],
      });
      if (!despesa) {
        throw new NotFoundException('Desculpe, não encontramos essa despesa');
      }
      return despesa;
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  create(despesa: DespesasCreateDto): Promise<DespesasInterface> {
    try {
      const createdDespesa = this.despesasRepository.create(despesa);
      return this.despesasRepository.save(createdDespesa);
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async update(id: number, despesa: DespesasUpdate): Promise<any> {
    try {
      const updated = await this.despesasRepository.update(id, despesa);

      return "Despesa atualizada com sucesso!";
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async delete(id: number): Promise<void> {
    try {
      if (!this.despesasRepository.findOne(id)) {
        throw new NotFoundException('Desculpe, não encontramos essa despesa');
      }
      await this.despesasRepository.delete(id);
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }
}
