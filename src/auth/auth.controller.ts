import { AuthDto } from './dtos/auth.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthTypeInterface } from './dtos/auth-type';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async auth(@Body() data: AuthDto): Promise<AuthTypeInterface> {
    return await this.authService.validateUser(data);
  }
}
