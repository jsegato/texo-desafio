import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of, throwError } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { MoviesService } from '../../services/movies.service';
import { YearsWithMultipleWinningMoviesComponent } from './years-with-multiple-winning-movies.component';
import { YearsWithMultipleWinningMovies } from '../../view-models/winning-movies-by-year';

describe('YearsWithMultipleWinningMoviesComponent', () => {
  let component: YearsWithMultipleWinningMoviesComponent;
  let fixture: ComponentFixture<YearsWithMultipleWinningMoviesComponent>;

  let moviesService: MoviesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [YearsWithMultipleWinningMoviesComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, TableModule, PaginatorModule]
    }).compileComponents();

    fixture = TestBed.createComponent(YearsWithMultipleWinningMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    moviesService = TestBed.inject(MoviesService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve obter a lista de anos em que teve mais de um vencedor', () => {
    const yearsWinner: YearsWithMultipleWinningMovies = {
      years: [
        { year: 1986, winnerCount: 2 },
        { year: 1990, winnerCount: 2 },
        { year: 2015, winnerCount: 2 }
      ]
    }
    const spied = spyOn(moviesService, 'getYearsWithMultipleWinner').and.returnValue(of(yearsWinner));
    component.getYearsWithMultipleWinnerList();

    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.winningMovies).toEqual(yearsWinner.years);
    expect(component.winningMovies.length).toEqual(3);
  });

  it('Deve obter uma lista de vencedores vazia quando houver erro na resposta da api', () => {
    const spied = spyOn(moviesService, 'getYearsWithMultipleWinner').and.returnValue(throwError(() => 'Api Error'));

    component.getYearsWithMultipleWinnerList();

    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.winningMovies).toEqual([]);
    expect(component.winningMovies.length).toEqual(0);
  });

});
