import { UserInterface } from './interfaces/user.interface';
import { UsersEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dtos/user-create.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UsersEntity>);
    findAll(): Promise<UserInterface[]>;
    findOne(id: number): Promise<UserInterface>;
    findUserByEmail(email: {
        email: string;
    }): Promise<UserInterface>;
    create(user: UserCreateDto): Promise<UserInterface>;
    update(id: number, task: any): Promise<any>;
    delete(id: number): Promise<void>;
}
