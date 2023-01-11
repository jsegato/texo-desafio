import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of, throwError } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Movie } from '../../view-models/movie';
import { MoviesService } from '../../services/movies.service';
import { WinningMoviesByYearComponent } from './winning-movies-by-year.component';

describe('WinningMoviesYearComponent', () => {
  let component: WinningMoviesByYearComponent;
  let fixture: ComponentFixture<WinningMoviesByYearComponent>;

  let moviesService: MoviesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WinningMoviesByYearComponent],
      imports: [IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        PaginatorModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WinningMoviesByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    moviesService = TestBed.inject(MoviesService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve a lista de filmes vencedores quando o ano for informado', () => {
    const movies: Movie[] = [
      {
        id: 202, year: 2019, title: "Cats",
        studios: ["Universal Pictures"],
        producers: ["Debra Hayward", "Eric Fellner", "Tim Bevan", "and Tom Hooper"],
        winner: true
      }
    ];
   
    const spied = spyOn(moviesService, 'getTheWinningMoviesOfTheYear').and.returnValue(of(movies));
    component.moviesYear = 2019;
    component.getMoviesList();

    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.movies).toEqual(movies);
    expect(component.moviesYear).not.toBeNull();
  });

  it('Deve obter lista de filmes vencedores vazia quando o ano não for informado', () => {
    const movies: Movie[] = []
    component.moviesYear = null;

    const spied = spyOn(moviesService, 'getTheWinningMoviesOfTheYear').and.returnValue(of(movies));
    component.getMoviesList();

    expect(spied).toHaveBeenCalledTimes(0);
    expect(component.movies).toEqual([]);
    expect(component.moviesYear).toBeNull();
  });

  it('Deve obter lista de filmes vencedores vazia quando a chamada da api retornar erro', () => {
    const spied = spyOn(moviesService, 'getTheWinningMoviesOfTheYear').and.returnValue(throwError(() => 'Api Error'));
    component.moviesYear = 2018;
    component.getMoviesList();

    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.movies).toEqual([]);
    expect(component.moviesYear).toEqual(2018);
  });

});
