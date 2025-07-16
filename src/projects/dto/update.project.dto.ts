import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create.project.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { ProjectStatus } from '../enums/project.status.enum';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @IsOptional()
  @IsEnum(ProjectStatus, {
    message:
      'O status deve ser um dos seguintes valores: pending, in_progress, completed',
  })
  status?: ProjectStatus;
}
