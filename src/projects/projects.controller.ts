import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create.project.dto';
import { UpdateProjectDto } from './dto/update.project.dto';

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
      };
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
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('status') status?: string,
  ) {
    try {
      const projects = await this.projectsService.findAll({
        page: Number(page),
        limit: Number(limit),
        status,
      });

      if (projects.data.length === 0) {
        if (status) {
          return {
            message: 'Nenhum projeto para o filtro selecionado',
            data: {
              data: [],
              total: 0,
            },
          };
        }
        return {
          message: 'Nenhum projeto cadastrado',
          data: {
            data: [],
            total: 0,
          },
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
      };
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
        message: `Projeto com ID ${id} deletado com sucesso`,
      };
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
