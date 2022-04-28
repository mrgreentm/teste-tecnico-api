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
exports.UserService = void 0;
const user_entity_1 = require("./entities/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        try {
            return await this.userRepository.find({
                relations: ['usersEntity'],
            });
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async findOne(id) {
        try {
            const user = await this.userRepository.findOne(id);
            if (!user) {
                throw new common_1.NotFoundException('Desculpe, não encontramos esse usuário');
            }
            return user;
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async findUserByEmail(email) {
        try {
            const user = await this.userRepository.findOne({
                where: { email: email.email },
            });
            return user;
        }
        catch (error) {
            console.log(error);
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    create(user) {
        try {
            const createdUser = this.userRepository.create(user);
            return this.userRepository.save(createdUser);
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async update(id, task) {
        try {
            const updated = await this.userRepository.update(id, task);
            return updated;
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
    async delete(id) {
        try {
            if (!this.userRepository.findOne(id)) {
                throw new common_1.NotFoundException('Desculpe, não encontramos esse usuário');
            }
            await this.userRepository.delete(id);
        }
        catch (error) {
            throw new Error('Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde');
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map