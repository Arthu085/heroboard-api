import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create.project.dto";
import { UpdateProjectDto } from "./dto/update.project.dto";

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Post()
    async create(@Body() dto: CreateProjectDto) {
        try {
            const projects = await this.projectsService.create(dto);

            return {
                message: 'Projeto cadastrado com sucesso',
                data: projects,
            }
        } catch (error) {
            throw new HttpException(
            {
            message: 'Erro ao cadastrar projeto',
            error: error.message,
            },
            HttpStatus.BAD_REQUEST,
        );
            }
    }

    @Get()
    async findAll() {
    try {
        const projects = await this.projectsService.findAll();

        if (projects.length === 0) {
        return {
            message: 'Nenhum projeto cadastrado',
            data: [],
        };
        }

        return {
        message: 'Projetos encontrados com sucesso',
        data: projects,
        };
    } catch (error) {
       throw new HttpException(
        {
          message: 'Erro ao buscar projetos',
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateProjectDto) {
        try {
            const projects = await this.projectsService.update(+id, dto);

            return {
                message: 'Projeto editado com sucesso',
                data: projects,
            }
        } catch (error) {
           const status =
            error.message === 'ID inválido'
                ? HttpStatus.BAD_REQUEST
                : error.status || HttpStatus.INTERNAL_SERVER_ERROR;

            throw new HttpException(
            {
                message: 'Erro ao editar projeto',
                error: error.message,
            },
            status,
            );
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        try {
            await this.projectsService.remove(+id);

            return {
                message: `Projeto com ID ${id} deletado com sucesso`
            }
        } catch (error) {
            const status =
            error.message === 'ID inválido'
                ? HttpStatus.BAD_REQUEST
                : error.status || HttpStatus.INTERNAL_SERVER_ERROR;

            throw new HttpException(
            {
                message: 'Erro ao deletar projeto',
                error: error.message,
            },
            status,
            );
        }
    }
}