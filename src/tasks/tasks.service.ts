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
    try {
      return await this.tasksRepository.find({
        relations: ['usersEntity'],
      });
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async findOne(id: number): Promise<TasksInterface> {
    try {
      const task = await this.tasksRepository.findOne(id, {
        relations: ['usersEntity'],
      });
      if (!task) {
        throw new NotFoundException('Desculpe, não encontramos essa task');
      }
      return task;
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  create(task: TasksInterface): Promise<TasksInterface> {
    try {
      const createdTask = this.tasksRepository.create(task);
      return this.tasksRepository.save(createdTask);
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async update(id: number, task: TasksUpdate): Promise<any> {
    try {
      const updated = await this.tasksRepository.update(id, task);

      return updated;
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async delete(id: number): Promise<void> {
    try {
      if (!this.tasksRepository.findOne(id)) {
        throw new NotFoundException('Desculpe, não encontramos essa task');
      }
      await this.tasksRepository.delete(id);
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }
}
