import { UserCreateDto } from './dtos/user-create.dto';
import { UserInterface } from './interfaces/user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserInterface[]>;
    getOne(id: number): Promise<UserInterface>;
    getUserByEmail(email: {
        email: string;
    }): Promise<UserInterface>;
    create(user: UserCreateDto): Promise<UserInterface>;
}
