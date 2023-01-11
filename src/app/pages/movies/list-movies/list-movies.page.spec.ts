import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of, throwError } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination';
import { IonicModule } from '@ionic/angular';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from "primeng/paginator";

import { MovieList } from '../../../movies/view-models/movie';
import { MoviesService } from '../../../movies/services/movies.service';
import { ListMoviesPage } from './list-movies.page';
import { loserMoviesMock, moviesAllMock, winningMoviesMock } from '../../../shared/mock/movies.mock';

describe('ListMoviesPage', () => {
  let component: ListMoviesPage;
  let fixture: ComponentFixture<ListMoviesPage>;

  let moviesService: MoviesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoviesPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, TableModule, PaginatorModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    moviesService = TestBed.inject(MoviesService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deve obter a lista de filmes.', () => {
    const moviesList: MovieList = moviesAllMock;
    const spied = spyOn(moviesService, 'getMoviesList').and.returnValue(of(moviesList));

    component.getMoviesList(true);
    
    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.listMovies).toEqual(moviesList.content);
    expect(component.itemsPerPage).toEqual(15);
    expect(component.moviesYear).toBeNull();
    expect(component.totalMovies).toEqual(moviesList.totalElements);
  });


  it('Deve obter a lista de filmes vencedores quando o filtro de vencedores for igual a Yes.', () => {
    const moviesList: MovieList = winningMoviesMock;
    const spied = spyOn(moviesService, 'getMoviesList').and.returnValue(of(moviesList));

    component.listWinners = 'Yes';
    component.getMoviesList(true);
    
    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.listWinners).toEqual('Yes');
    expect(component.itemsPerPage).toEqual(15);
    expect(component.listMovies).toEqual(moviesList.content);
    expect(component.totalMovies).toEqual(moviesList.totalElements);
  });

  it('Deve obter a lista de filmes perdedores quando o filtro de vencedores for igual a No.', () => {
    const moviesList: MovieList = loserMoviesMock;
    const spied = spyOn(moviesService, 'getMoviesList').and.returnValue(of(moviesList));

    component.listWinners = 'No';
    component.getMoviesList(true);
    
    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.listWinners).toEqual('No');
    expect(component.itemsPerPage).toEqual(15);
    expect(component.listMovies).toEqual(moviesList.content);
    expect(component.totalMovies).toEqual(moviesList.totalElements);
  });


  it('Deve obter a lista de filmes vazia quando a chamada da api retornar erro.', () => {
    const spied = spyOn(moviesService, 'getMoviesList').and.returnValue(throwError(() => 'Api Error'));
    component.getMoviesList(true);
    
    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.listMovies).toEqual([]);
    expect(component.listMovies.length).toEqual(0);
    expect(component.totalMovies).toEqual(0);
  });


  it('Deve fazer a paginação da lista de filmes.', () => {
    let paginacao: Pagination = {
      first: 0,
      page: 1,
      pageCount: 0,
      rows: 0
    }
    spyOn(component, 'changePage').and.callThrough();
    component.changePage(paginacao);
    expect(component.page).toEqual(1);
  });


});
