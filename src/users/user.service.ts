import { UserInterface } from './interfaces/user.interface';
import { UsersEntity } from './entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity)
    private userRepository: Repository<UsersEntity>,
  ) {}

  async findAll(): Promise<UserInterface[]> {
    return await this.userRepository.find({
      relations: ['usersEntity'],
    });
  }

  async findOne(id: number): Promise<UserInterface> {
    const task = await this.userRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('Desculpe, não encontramos esse usuário');
    }
    return task;
  }

  create(user: UserInterface): Promise<UserInterface> {
    const createdUser = this.userRepository.create(user);
    return this.userRepository.save(createdUser);
  }

  async update(id: number, task: any): Promise<any> {
    const updated = await this.userRepository.update(id, task);

    return updated;
  }

  async delete(id: number): Promise<void> {
    if (!this.userRepository.findOne(id)) {
      throw new NotFoundException('Desculpe, não encontramos esse usuário');
    }
    await this.userRepository.delete(id);
  }
}
