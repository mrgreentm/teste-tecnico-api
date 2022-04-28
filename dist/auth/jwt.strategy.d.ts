import { UserInterface } from './../users/interfaces/user.interface';
import { Strategy } from 'passport-jwt';
import { UserService } from 'src/users/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: {
        sub: UserInterface['id'];
        name: UserInterface['name'];
    }): Promise<UserInterface>;
}
export {};
