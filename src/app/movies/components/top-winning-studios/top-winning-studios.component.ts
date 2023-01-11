import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from '../../services/movies.service';
import { WinCountByStudio, WinCountByStudioList } from '../../view-models/win-count-by-studio';

@Component({
  selector: 'app-top-winning-studios',
  templateUrl: './top-winning-studios.component.html',
  styleUrls: ['./top-winning-studios.component.scss'],
})
export class TopWinningStudiosComponent implements OnInit, OnDestroy {

  topWinningStudios: Array<WinCountByStudio>;
  private subscriptions: Subscription = new Subscription();

  constructor(private moviesService: MoviesService) {
    this.topWinningStudios = [];
  }

  ngOnInit() {
    this.getTopWinningStudiosList()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getTopWinningStudiosList(): void {
    this.subscriptions.add(
      this.moviesService.getWinningStudios()
        .subscribe({
          next: (response: WinCountByStudioList) => {
            this.topWinningStudios = response.studios.slice(0, 3)
          },
          error: (error) => {
            this.topWinningStudios = [];
            console.error(error)
          }
        })
    );
  }

}
