import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ProjectStatus } from './enums/project.status.enum';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  responsible: string;

  @Column({
    type: 'varchar',
    default: ProjectStatus.PENDING,
  })
  status: ProjectStatus;
}
