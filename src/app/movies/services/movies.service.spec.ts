import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoviesService } from './movies.service';
import { Movie, MovieList } from '../view-models/movie';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpController: HttpTestingController;

  let url = 'https://tools.texoit.com/backend-java/api/movies';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MoviesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve recuperar a lista de filmes vencedores para o ano selecionado', () => {
    const year = 2018;
    const movies: Movie[] = [];

    service.getTheWinningMoviesOfTheYear(year).subscribe((res) => {
      expect(res).toEqual(movies);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}?winner=true&year=${year}`,
    });
    req.flush(movies);
  });


  it('Deve obter a lista de filmes realizando paginação, observando os filtros quando houver', () => {
    const page = 0;
    const size = 15;
    const year = 2019;
    const winners = true;
    const moviesList: MovieList = {} as MovieList;

    service.getMoviesList(page, size, year, winners).subscribe((res) => {
      expect(res).toEqual(moviesList);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}?page=${page}&size=${size}&winner=${winners}&year=${year}`,
    });
    req.flush(moviesList);
  });

});
