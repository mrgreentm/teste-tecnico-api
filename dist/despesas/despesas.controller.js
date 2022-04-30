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
exports.DespesasController = void 0;
const despesas_update_1 = require("./interfaces/despesas-update");
const despesas_service_1 = require("./despesas.service");
const common_1 = require("@nestjs/common");
const despesas_create_dto_1 = require("./dtos/despesas-create.dto");
const auth_guard_1 = require("../auth/auth.guard");
let DespesasController = class DespesasController {
    constructor(service) {
        this.service = service;
    }
    async findAll() {
        const tasks = await this.service.findAll();
        return tasks;
    }
    async findOne(id) {
        return await this.service.findOne(id);
    }
    create(task) {
        return this.service.create(task);
    }
    async delete(id) {
        return await this.service.delete(id);
    }
    async update(id, task) {
        return await this.service.update(id, task);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [despesas_create_dto_1.DespesasCreateDto]),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, despesas_update_1.DespesasUpdate]),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "update", null);
DespesasController = __decorate([
    (0, common_1.Controller)('despesas'),
    __metadata("design:paramtypes", [despesas_service_1.DespesasService])
], DespesasController);
exports.DespesasController = DespesasController;
//# sourceMappingURL=despesas.controller.js.map