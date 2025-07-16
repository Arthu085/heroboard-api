import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./project.entity";
import { Repository } from "typeorm";
import { CreateProjectDto } from "./dto/create.project.dto";
import { UpdateProjectDto } from "./dto/update.project.dto";

@Injectable()
export class ProjectsService{
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>
    ) {}

    async create(dto: CreateProjectDto): Promise<Project> {
        const project = this.projectRepository.create(dto);
        return this.projectRepository.save(project);
    }

    async findAll(): Promise<Project[]> {
        return this.projectRepository.find();
    }

    
    async findOne(id: number): Promise<Project> {
        const project = await this.projectRepository.findOneBy({ id });

        if (!project) {
        throw new NotFoundException(`Projeto com ID ${id} não encontrado`);
        }

        return project;
    }

    async update(id: number, dto: UpdateProjectDto): Promise<Project> {
        const project = await this.findOne(id);
        const update = Object.assign(project, dto);
        return this.projectRepository.save(update);
    }

    async remove(id: number): Promise<void> {
        const result = await this.projectRepository.delete(id);

        if(result.affected === 0) {
            throw new NotFoundException(`Projeto com ID ${id} não encontrado`)
        }
    }
}