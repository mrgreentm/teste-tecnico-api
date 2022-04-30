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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesasEntity = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let DespesasEntity = class DespesasEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DespesasEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'entretenimento', nullable: true }),
    __metadata("design:type", String)
], DespesasEntity.prototype, "entretenimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DespesasEntity.prototype, "alimentacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], DespesasEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UsersEntity, (usersEntity) => usersEntity.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UsersEntity)
], DespesasEntity.prototype, "usersEntity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DespesasEntity.prototype, "educacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DespesasEntity.prototype, "saude", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DespesasEntity.prototype, "transporte", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ nullable: true, name: 'created_at' }),
    __metadata("design:type", Date)
], DespesasEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ nullable: true, name: 'deleted_at' }),
    __metadata("design:type", Date)
], DespesasEntity.prototype, "deletedAt", void 0);
DespesasEntity = __decorate([
    (0, typeorm_1.Entity)()
], DespesasEntity);
exports.DespesasEntity = DespesasEntity;
//# sourceMappingURL=despesas.entity.js.map