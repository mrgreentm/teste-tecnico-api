import { AuthDto } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import { AuthTypeInterface } from './dtos/auth-type';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    auth(data: AuthDto): Promise<AuthTypeInterface>;
}
