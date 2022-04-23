import { TasksInterface } from './interfaces/tasks-interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from './entities/tasks.entity';
import { TasksUpdate } from './interfaces/task-update';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  async findAll(): Promise<TasksInterface[]> {
    return await this.tasksRepository.find({
      relations: ['usersEntity'],
    });
  }

  async findOne(id: number): Promise<TasksInterface> {
    const task = await this.tasksRepository.findOne(id, {
      relations: ['usersEntity'],
    });
    if (!task) {
      throw new NotFoundException('Desculpe, não encontramos essa task');
    }
    return task;
  }

  create(task: TasksInterface): Promise<TasksInterface> {
    const createdTask = this.tasksRepository.create(task);
    return this.tasksRepository.save(createdTask);
  }

  async update(id: number, task: TasksUpdate): Promise<any> {
    const updated = await this.tasksRepository.update(id, task);

    return updated;
  }

  async delete(id: number): Promise<void> {
    if (!this.tasksRepository.findOne(id)) {
      throw new NotFoundException('Desculpe, não encontramos essa task');
    }
    await this.tasksRepository.delete(id);
  }
}
