import { TasksUpdate } from './interfaces/task-update';
import { TasksInterface } from './interfaces/tasks-interface';
import { TasksService } from './tasks.service';
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
import { TasksCreateDto } from './dtos/tasks-create.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<TasksInterface[]> {
    const tasks = await this.service.findAll();
    return tasks;
  }
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: number): Promise<TasksInterface> {
    return await this.service.findOne(id);
  }
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() task: TasksCreateDto): Promise<TasksInterface> {
    return this.service.create(task);
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
    @Body() task: TasksUpdate,
  ): Promise<void> {
    return await this.service.update(id, task);
  }
}
