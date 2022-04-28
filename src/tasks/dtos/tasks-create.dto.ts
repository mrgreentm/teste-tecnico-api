import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TasksCreateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsOptional()
  priority: string;
}
