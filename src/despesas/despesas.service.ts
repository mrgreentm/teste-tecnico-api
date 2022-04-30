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

      return 'Despesa atualizada com sucesso!';
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

  async findValueOfCarter({ userId }: { userId: number }): Promise<any> {
    try {
      const value = await this.despesasRepository.find({ where: { userId } });
      const gastos = [];
      const ganhos = [];
      for (let i = 0; i < value.length; i++) {
        const element = value[i].ganhos;
        element !== null ? ganhos.push(element) : ganhos.push(0);
        const { alimentacao, educacao, entretenimento, saude, transporte } =
          value[i];
        alimentacao !== null ? gastos.push(element) : gastos.push(0);
        educacao !== null ? gastos.push(element) : gastos.push(0);
        entretenimento !== null ? gastos.push(element) : gastos.push(0);
        saude !== null ? gastos.push(element) : gastos.push(0);
        transporte !== null ? gastos.push(element) : gastos.push(0);
      }
      const ganhosTotais = ganhos.reduce((soma, i) => soma + i);
      const gastosTotais = gastos.reduce((soma, i) => soma + i);

      return { saldo: ganhosTotais - gastosTotais };
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }
}
