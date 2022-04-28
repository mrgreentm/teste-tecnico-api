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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tasks_entity_1 = require("./entities/tasks.entity");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async findAll() {
        try {
            return await this.tasksRepository.find({
                relations: ['usersEntity'],
            });
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async findOne(id) {
        try {
            const task = await this.tasksRepository.findOne(id, {
                relations: ['usersEntity'],
            });
            if (!task) {
                throw new common_1.NotFoundException('Desculpe, não encontramos essa task');
            }
            return task;
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    create(task) {
        try {
            const createdTask = this.tasksRepository.create(task);
            return this.tasksRepository.save(createdTask);
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async update(id, task) {
        try {
            const updated = await this.tasksRepository.update(id, task);
            return updated;
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async delete(id) {
        try {
            if (!this.tasksRepository.findOne(id)) {
                throw new common_1.NotFoundException('Desculpe, não encontramos essa task');
            }
            await this.tasksRepository.delete(id);
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasks_entity_1.Tasks)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map