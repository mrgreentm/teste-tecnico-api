import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DespesasController } from './despesas.controller';
import { DespesasService } from './despesas.service';
import { DespesasEntity } from './entities/despesas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DespesasEntity])],
  controllers: [DespesasController],
  providers: [DespesasService],
  exports: [DespesasService],
})
export class DespesasModule {}
