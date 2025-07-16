import {  IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {
    @IsString({ message: 'O nome do projeto deve ser uma string' })
    @IsNotEmpty({ message: 'O nome do projeto é obrigatório' })
    name: string;

    @IsString({ message: 'A descrição do projeto deve ser uma string' })
    @IsNotEmpty({ message: 'A descrição do projeto é obrigatório' })
    description: string;

    @IsString({ message: 'O responsável do projeto deve ser uma string' })
    @IsNotEmpty({ message: 'O responsável do projeto é obrigatório' })
    responsible: string;
}