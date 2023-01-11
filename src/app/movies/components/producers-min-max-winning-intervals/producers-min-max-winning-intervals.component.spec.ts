import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of, throwError } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { MoviesService } from '../../services/movies.service';
import { AwardIntervalByProducer } from '../../view-models/award-winning producer';

import { ProducersMinMaxWinningIntervalsComponent } from './producers-min-max-winning-intervals.component';

describe('ProducersMinMaxWinningIntervalsComponent', () => {
  let component: ProducersMinMaxWinningIntervalsComponent;
  let fixture: ComponentFixture<ProducersMinMaxWinningIntervalsComponent>;

  let moviesService: MoviesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProducersMinMaxWinningIntervalsComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, TableModule, PaginatorModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProducersMinMaxWinningIntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    moviesService = TestBed.inject(MoviesService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve obter os produtores com maior e menor intervalo entre vitórias', () => {
    const awardInterval: AwardIntervalByProducer = {
      min: [
        { producer: "Joel Silver", "interval": 1, "previousWin": 1990, "followingWin": 1991 }
      ],
      max: [
        { "producer": "Matthew Vaughn", "interval": 13, "previousWin": 2002, "followingWin": 2015 }
      ]
    }

    const spied = spyOn(moviesService, 'getProducersMaxMinWinningIntervals').and.returnValue(of(awardInterval));
    component.getProducersMaxMinWinningIntervals();

    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.maxInterval).toEqual(awardInterval.max);
    expect(component.minInterval).toEqual(awardInterval.min);
    expect(component.maxInterval.length).toEqual(1);
    expect(component.minInterval.length).toEqual(1);
  });

  it('Deve obter listas vazias de produtores com maior e menor intervalo entre vitórias quando a chamada da api retornar erro', () => {
    const spied = spyOn(moviesService, 'getProducersMaxMinWinningIntervals').and.returnValue(throwError(() => 'Api Error'));

    component.getProducersMaxMinWinningIntervals();

    expect(spied).toHaveBeenCalledTimes(1);
    expect(component.maxInterval).toEqual([]);
    expect(component.minInterval).toEqual([]);
  });

});
