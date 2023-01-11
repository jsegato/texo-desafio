import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { of, throwError } from 'rxjs';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { MoviesService } from '../../services/movies.service';
import { WinCountByStudioList } from '../../view-models/win-count-by-studio';
import { TopWinningStudiosComponent } from './top-winning-studios.component';

describe('TopWinningStudiosComponent', () => {
  let component: TopWinningStudiosComponent;
  let fixture: ComponentFixture<TopWinningStudiosComponent>;

  let moviesService: MoviesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TopWinningStudiosComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, TableModule, PaginatorModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TopWinningStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    moviesService = TestBed.inject(MoviesService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve obter a lista do três studios mais premiados', () => {

    const studios: WinCountByStudioList = {
      studios: [
        { name: "Columbia Pictures", winCount: 7 },
        { name: "Paramount Pictures", winCount: 6 },
        { name: "Warner Bros.", winCount: 5 }
      ]
    }

    const spied = spyOn(moviesService, 'getWinningStudios').and.returnValue(of(studios));
    component.getTopWinningStudiosList();

    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.topWinningStudios).toEqual(studios.studios);
  });

  it('Deve obter uma lista vazia de studios premiados quando a chamada da api retornar erro', () => {
    const spied = spyOn(moviesService, 'getWinningStudios').and.returnValue(throwError(() => 'Api Error'));;
    component.getTopWinningStudiosList();

    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.topWinningStudios).toEqual([]);
    expect(component.topWinningStudios.length).toEqual(0);
  });

});
