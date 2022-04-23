import { UserInterface } from './interfaces/user.interface';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserInterface[]> {
    return await this.userService.findAll();
  }
  @Get(':id')
  async getOne(@Param() id: number): Promise<UserInterface> {
    return await this.userService.findOne(id);
  }
  @Post()
  async create(@Body() user: UserInterface): Promise<UserInterface> {
    return await this.userService.create(user);
  }
}
