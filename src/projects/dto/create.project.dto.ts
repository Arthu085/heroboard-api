import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ProjectStatus } from "../enums/project.status.enum";

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    responsible: string;

    @IsEnum(ProjectStatus)
    status: ProjectStatus;
}