import { UserInterface } from './../users/interfaces/user.interface';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { UserService } from 'src/users/user.service';
import { AuthTypeInterface } from './dtos/auth-type';
import { AuthDto } from './dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: AuthDto): Promise<AuthTypeInterface> {
    const user = await this.userService.findUserByEmail(data.email);

    const validPassword = compareSync(data.password, user.password);
    const token = await this.jwtToken(user);

    if (!validPassword) {
      throw new UnauthorizedException('A senha do usuário está incorreta!');
    }
    return { user, token: token };
  }

  private async jwtToken(user: UserInterface): Promise<string> {
    const payload = { username: user.name, sub: user.id };
    return this.jwtService.signAsync(payload);
  }
}
