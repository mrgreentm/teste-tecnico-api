import { DespesasUpdate } from './interfaces/despesas-update';
import { DespesasInterface } from './interfaces/despesas-interface';
import { DespesasService } from './despesas.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { DespesasCreateDto } from './dtos/despesas-create.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('despesas')
export class DespesasController {
  constructor(private service: DespesasService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<DespesasInterface[]> {
    const despesas = await this.service.findAll();
    return despesas;
  }
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: number): Promise<DespesasInterface> {
    return await this.service.findOne(id);
  }
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() despesas: DespesasCreateDto): Promise<DespesasInterface> {
    return this.service.create(despesas);
  }
  @Post('carteira')
  @UseGuards(JwtAuthGuard)
  value(@Body() userId: { userId: number }): Promise<any> {
    return this.service.findValueOfCarter(userId);
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number): Promise<void> {
    return await this.service.delete(id);
  }
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: number,
    @Body() task: DespesasUpdate,
  ): Promise<void> {
    return await this.service.update(id, task);
  }
}
