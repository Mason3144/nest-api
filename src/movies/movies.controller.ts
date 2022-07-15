import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `movie number ${id}`;
  }
  @Post()
  create() {
    return 'this will create a movie';
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `this will delete a movie ${id}`;
  }
  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `this page is for update a movie with id of ${id}`;
  }
}
