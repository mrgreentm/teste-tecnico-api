import { UserService } from 'src/users/user.service';
import { AuthTypeInterface } from './dtos/auth-type';
import { AuthDto } from './dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(data: AuthDto): Promise<AuthTypeInterface>;
    private jwtToken;
}
