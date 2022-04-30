import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DespesasCreateDto {

  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsOptional()
  entretenimento: number;

  @IsString()
  @IsOptional()
  alimentacao: number;

  @IsString()
  @IsOptional()
  saude: number;

  @IsString()
  @IsOptional()
  transporte: number;

  @IsString()
  @IsOptional()
  educacao: number;
}
