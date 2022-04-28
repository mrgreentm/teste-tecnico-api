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
} from '@nestjs/common';
import { TasksCreateDto } from './dtos/tasks-create.dto';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  async findAll(): Promise<TasksInterface[]> {
    const tasks = await this.service.findAll();
    return tasks;
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<TasksInterface> {
    return await this.service.findOne(id);
  }
  @Post()
  create(@Body() task: TasksCreateDto): Promise<TasksInterface> {
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
