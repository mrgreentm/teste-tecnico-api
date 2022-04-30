"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesasModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const despesas_controller_1 = require("./despesas.controller");
const despesas_service_1 = require("./despesas.service");
const despesas_entity_1 = require("./entities/despesas.entity");
let DespesasModule = class DespesasModule {
};
DespesasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([despesas_entity_1.DespesasEntity])],
        controllers: [despesas_controller_1.DespesasController],
        providers: [despesas_service_1.DespesasService],
        exports: [despesas_service_1.DespesasService],
    })
], DespesasModule);
exports.DespesasModule = DespesasModule;
//# sourceMappingURL=despesas.module.js.map