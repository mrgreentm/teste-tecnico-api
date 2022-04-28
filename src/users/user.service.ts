import { UserInterface } from './interfaces/user.interface';
import { UsersEntity } from './entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dtos/user-create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity)
    private userRepository: Repository<UsersEntity>,
  ) {}

  async findAll(): Promise<UserInterface[]> {
    try {
      return await this.userRepository.find({
        relations: ['usersEntity'],
      });
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async findOne(id: number): Promise<UserInterface> {
    try {
      const user = await this.userRepository.findOne(id);
      if (!user) {
        throw new NotFoundException('Desculpe, não encontramos esse usuário');
      }
      return user;
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async findUserByEmail(email: { email: string }): Promise<UserInterface> {
    try {
      const user = await this.userRepository.findOne({
        where: { email: email.email },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  create(user: UserCreateDto): Promise<UserInterface> {
    try {
      const createdUser = this.userRepository.create(user);
      return this.userRepository.save(createdUser);
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async update(id: number, task: any): Promise<any> {
    try {
      const updated = await this.userRepository.update(id, task);

      return updated;
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }

  async delete(id: number): Promise<void> {
    try {
      if (!this.userRepository.findOne(id)) {
        throw new NotFoundException('Desculpe, não encontramos esse usuário');
      }
      await this.userRepository.delete(id);
    } catch (error) {
      throw new Error(
        'Desculpe, tivemos um erro interno. Por favor, tente novamente mais tarde',
      );
    }
  }
}
