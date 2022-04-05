import { TasksUpdate } from './interfaces/task-update';
import { TasksInterface } from './interfaces/tasks-interface';
import { Tasks } from './entities/tasks.entity';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  async findAll(): Promise<Tasks[]> {
    const tasks = await this.service.findAll();
    return tasks;
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Tasks> {
    return await this.service.findOne(id);
  }
  @Post()
  create(@Body() task: TasksInterface): Promise<Tasks> {
    return this.service.create(task);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.service.delete(id);
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() task: TasksUpdate,
  ): Promise<void> {
    return await this.service.update(id, task);
  }
}
