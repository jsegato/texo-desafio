import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from '../../services/movies.service';
import { AwardIntervalByProducer, AwardWinningProducer } from '../../view-models/award-winning producer';

@Component({
  selector: 'app-producers-min-max-winning-intervals',
  templateUrl: './producers-min-max-winning-intervals.component.html',
  styleUrls: ['./producers-min-max-winning-intervals.component.scss'],
})
export class ProducersMinMaxWinningIntervalsComponent implements OnInit, OnDestroy {

  maxInterval: AwardWinningProducer[];
  minInterval: AwardWinningProducer[];
  private subscriptions: Subscription = new Subscription();

  constructor(private moviesService: MoviesService) {
    this.maxInterval = [];
    this.minInterval = [];
  }

  ngOnInit() {
    this.getProducersMaxMinWinningIntervals();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getProducersMaxMinWinningIntervals(): void {
    this.subscriptions.add(
      this.moviesService.getProducersMaxMinWinningIntervals()
        .subscribe({
          next: (response: AwardIntervalByProducer) => {
            this.maxInterval = response.max;
            this.minInterval = response.min;
          },
          error: (error) => {
            this.maxInterval = [];
            this.maxInterval = [];
            console.error(error);
          }
        })
    );
  }

}
