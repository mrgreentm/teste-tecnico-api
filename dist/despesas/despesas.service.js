"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const despesas_entity_1 = require("./entities/despesas.entity");
let DespesasService = class DespesasService {
    constructor(despesasRepository) {
        this.despesasRepository = despesasRepository;
    }
    async findAll() {
        try {
            return await this.despesasRepository.find({
                relations: ['usersEntity'],
            });
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async findOne(id) {
        try {
            const despesa = await this.despesasRepository.findOne(id, {
                relations: ['usersEntity'],
            });
            if (!despesa) {
                throw new common_1.NotFoundException('Desculpe, não encontramos essa despesa');
            }
            return despesa;
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    create(despesa) {
        try {
            const createdDespesa = this.despesasRepository.create(despesa);
            return this.despesasRepository.save(createdDespesa);
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async update(id, despesa) {
        try {
            const updated = await this.despesasRepository.update(id, despesa);
            return "Despesa atualizada com sucesso!";
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async delete(id) {
        try {
            if (!this.despesasRepository.findOne(id)) {
                throw new common_1.NotFoundException('Desculpe, não encontramos essa despesa');
            }
            await this.despesasRepository.delete(id);
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async findValueOfCarter({ userId }) {
        try {
            const value = await this.despesasRepository.find({ where: { userId } });
            const gastos = [];
            const ganhos = [];
            for (let i = 0; i < value.length; i++) {
                const element = value[i].ganhos;
                element !== null ? ganhos.push(element) : ganhos.push(0);
                const { alimentacao, educacao, entretenimento, saude, transporte } = value[i];
                alimentacao !== null ? gastos.push(element) : gastos.push(0);
                educacao !== null ? gastos.push(element) : gastos.push(0);
                entretenimento !== null ? gastos.push(element) : gastos.push(0);
                saude !== null ? gastos.push(element) : gastos.push(0);
                transporte !== null ? gastos.push(element) : gastos.push(0);
            }
            const ganhosTotais = ganhos.reduce((soma, i) => soma + i);
            const gastosTotais = gastos.reduce((soma, i) => soma + i);
            console.log(ganhosTotais);
            console.log(gastosTotais);
            return { saldo: ganhosTotais - gastosTotais };
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
};
DespesasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(despesas_entity_1.DespesasEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DespesasService);
exports.DespesasService = DespesasService;
//# sourceMappingURL=despesas.service.js.map