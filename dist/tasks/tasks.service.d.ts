import { TasksInterface } from './interfaces/tasks-interface';
import { Repository } from 'typeorm';
import { Tasks } from './entities/tasks.entity';
import { TasksUpdate } from './interfaces/task-update';
import { TasksCreateDto } from './dtos/tasks-create.dto';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Tasks>);
    findAll(): Promise<TasksInterface[]>;
    findOne(id: number): Promise<TasksInterface>;
    create(task: TasksCreateDto): Promise<TasksInterface>;
    update(id: number, task: TasksUpdate): Promise<any>;
    delete(id: number): Promise<void>;
}
