import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Pagination } from '../../../shared/models/pagination';
import { MoviesService } from '../../../movies/services/movies.service';
import { Movie, MovieList } from '../../../movies/view-models/movie';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.page.html',
  styleUrls: ['./list-movies.page.scss'],
})
export class ListMoviesPage implements OnInit, OnDestroy {

  page: number;
  minYear: number;
  maxYear: number;
  listMovies: Array<Movie>;
  moviesYear: number | null;
  listWinners: string | null;
  totalMovies: number;
  itemsPerPage: number;
  private subscriptions: Subscription = new Subscription();

  constructor(private moviesService: MoviesService) {
    this.page = 0
    this.listMovies = [];
    this.minYear = 1980;
    this.maxYear = 2023;
    this.moviesYear = null;
    this.listWinners = '';
    this.totalMovies = 0;
    this.itemsPerPage = 15;
  }

  ngOnInit() {
    this.getMoviesList();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getMoviesList(resetPage = true): void {
    if (resetPage) {
      this.page = 0;
    }
    const listWinners = this.listWinners === 'Yes' ? true : (this.listWinners === 'No' ? false : null);
    this.subscriptions.add(
      this.moviesService.getMoviesList(this.page, this.itemsPerPage, this.moviesYear, listWinners)
        .subscribe({
          next: (response: MovieList) => {
            this.listMovies = response.content;
            this.totalMovies = response.totalElements;
          },
          error: (error) => {
            this.listMovies = [];
            this.totalMovies = 0;
            console.error(error);
          }
        })
    );
  }

  changePage(eventPagination: Pagination): void {
    this.page = eventPagination.page;
    this.getMoviesList(false);
  }
}
