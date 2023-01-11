import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from '../../services/movies.service';
import { WinningMoviesByYear, YearsWithMultipleWinningMovies } from '../../view-models/winning-movies-by-year';

@Component({
  selector: 'app-years-with-multiple-winning-movies',
  templateUrl: './years-with-multiple-winning-movies.component.html',
  styleUrls: ['./years-with-multiple-winning-movies.component.scss'],
})
export class YearsWithMultipleWinningMoviesComponent implements OnInit, OnDestroy {

  winningMovies: WinningMoviesByYear[];
  private subscriptions: Subscription = new Subscription();

  constructor(private moviesService: MoviesService) {
    this.winningMovies = [];
  }

  ngOnInit() {
    this.getYearsWithMultipleWinnerList();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getYearsWithMultipleWinnerList(): void {
    this.subscriptions.add(
      this.moviesService.getYearsWithMultipleWinner()
        .subscribe({
          next: (response: YearsWithMultipleWinningMovies) => {
            this.winningMovies = response.years;
          },
          error: (error) => {
            this.winningMovies = [];
            console.error(error)
          }
        })
    );
  }
}
