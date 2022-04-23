export class TasksInterface {
  id: number;
  title: string;
  userId: number;
  description: string;
  priority: string;
  createdAt?: Date;
  deletedAt?: Date;
}
