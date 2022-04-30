import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DespesasCreateDto {

  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsOptional()
  entretenimento: string;

  @IsString()
  @IsOptional()
  alimentacao: string;

  @IsString()
  @IsOptional()
  saude: string;

  @IsString()
  @IsOptional()
  transporte: string;

  @IsString()
  @IsOptional()
  educacao: string;
}
