import { UserCreateDto } from './dtos/user-create.dto';
import { UserInterface } from './interfaces/user.interface';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllUsers(): Promise<UserInterface[]> {
    return await this.userService.findAll();
  }
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param() id: number): Promise<UserInterface> {
    return await this.userService.findOne(id);
  }

  @Post('email')
  @UseGuards(JwtAuthGuard)
  async getUserByEmail(
    @Body() email: { email: string },
  ): Promise<UserInterface> {
    return await this.userService.findUserByEmail(email);
  }
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() user: UserCreateDto): Promise<UserInterface> {
    return await this.userService.create(user);
  }
}
