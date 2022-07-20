import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
  searchYear(searchingYear: number): Movie[] {
    return this.movies.filter((movie) => movie.year === searchingYear);
  }
  searchTitle(searchingTitle: string): Movie[] {
    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchingTitle.toLowerCase()),
    );
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`The movie with ID,${id}, does not exsist`);
    }
    return movie;
  }
  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }
  create(movieData: CreateMovieDto) {
    return this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({
      ...movie,
      ...updateData,
    });
  }
}
