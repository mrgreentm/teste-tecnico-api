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
exports.Tasks = void 0;
const user_entity_1 = require("./../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Tasks = class Tasks {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tasks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', nullable: true }),
    __metadata("design:type", String)
], Tasks.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tasks.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], Tasks.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UsersEntity, (usersEntity) => usersEntity.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UsersEntity)
], Tasks.prototype, "usersEntity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tasks.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ nullable: true, name: 'created_at' }),
    __metadata("design:type", Date)
], Tasks.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ nullable: true, name: 'deleted_at' }),
    __metadata("design:type", Date)
], Tasks.prototype, "deletedAt", void 0);
Tasks = __decorate([
    (0, typeorm_1.Entity)()
], Tasks);
exports.Tasks = Tasks;
//# sourceMappingURL=tasks.entity.js.map