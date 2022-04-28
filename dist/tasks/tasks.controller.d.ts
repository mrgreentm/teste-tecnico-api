import { TasksUpdate } from './interfaces/task-update';
import { TasksInterface } from './interfaces/tasks-interface';
import { TasksService } from './tasks.service';
import { TasksCreateDto } from './dtos/tasks-create.dto';
export declare class TasksController {
    private service;
    constructor(service: TasksService);
    findAll(): Promise<TasksInterface[]>;
    findOne(id: number): Promise<TasksInterface>;
    create(task: TasksCreateDto): Promise<TasksInterface>;
    delete(id: number): Promise<void>;
    update(id: number, task: TasksUpdate): Promise<void>;
}
