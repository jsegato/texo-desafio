import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Movie } from '../../view-models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-winning-movies-by-year',
  templateUrl: './winning-movies-by-year.component.html',
  styleUrls: ['./winning-movies-by-year.component.scss'],
})
export class WinningMoviesByYearComponent implements OnDestroy {
  movies: Array<Movie>;
  minYear: number;
  maxYear: number;
  moviesYear: number | null;
  private subscriptions: Subscription = new Subscription();

  constructor(private moviesService: MoviesService) {
    this.movies = [];
    this.minYear = 1980;
    this.maxYear = 2023;
    this.moviesYear = null;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getMoviesList(): void {
    if (this.moviesYear && this.moviesYear >= this.minYear) {
      this.subscriptions.add(
        this.moviesService.getTheWinningMoviesOfTheYear(this.moviesYear)
          .subscribe({
            next: (response: Movie[]) => {
              this.movies = response;
            },
            error: (error) => {
              this.movies = [];
              console.error(error);
            }
          })
      );
    } else {
      this.movies = [];
    }
  }

}
