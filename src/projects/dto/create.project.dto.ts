import {
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProjectDto {
  @IsString({ message: 'O nome do projeto deve ser uma string' })
  @IsNotEmpty({ message: 'O nome do projeto é obrigatório' })
  @Length(3, 50, {
    message: 'O nome do projeto deve ter entre 3 e 50 caracteres',
  })
  name: string;

  @IsString({ message: 'A descrição do projeto deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição do projeto é obrigatória' })
  @MaxLength(200, {
    message: 'A descrição pode ter no máximo 200 caracteres',
  })
  description: string;

  @IsString({ message: 'O responsável do projeto deve ser uma string' })
  @IsNotEmpty({ message: 'O responsável do projeto é obrigatório' })
  @MinLength(2, {
    message: 'O responsável deve ter no mínimo 2 caracteres',
  })
  responsible: string;
}
