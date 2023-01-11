import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Movie, MovieList } from '../view-models/movie';
import { WinCountByStudioList } from '../view-models/win-count-by-studio';
import { AwardIntervalByProducer } from '../view-models/award-winning producer';
import { YearsWithMultipleWinningMovies } from '../view-models/winning-movies-by-year';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  api: string;

  constructor(private httpClient: HttpClient) {
    this.api = environment.API_URL;
  }

  getTheWinningMoviesOfTheYear(year: number): Observable<Movie[]> {
    const queryParams = new HttpParams()
      .set('winner', true)
      .set('year', year);
    return this.httpClient.get<Movie[]>(this.api, { params: queryParams });
  }

  getYearsWithMultipleWinner(): Observable<YearsWithMultipleWinningMovies> {
    const queryParams = new HttpParams()
      .set('projection', 'years-with-multiple-winners');
    return this.httpClient.get<YearsWithMultipleWinningMovies>(this.api, { params: queryParams });
  }

  getWinningStudios(): Observable<WinCountByStudioList> {
    const queryParams = new HttpParams()
      .set('projection', 'studios-with-win-count');
    return this.httpClient.get<WinCountByStudioList>(this.api, { params: queryParams });
  }

  getProducersMaxMinWinningIntervals(): Observable<AwardIntervalByProducer> {
    const queryParams = new HttpParams()
      .set('projection', 'max-min-win-interval-for-producers');
    return this.httpClient.get<AwardIntervalByProducer>(this.api, { params: queryParams });
  }

  getMoviesList(page: number, size: number, year: number | null, winners: boolean | null): Observable<MovieList> {
    let queryParams = new HttpParams()
      .set('page', page)
      .set('size', size);

    if (typeof winners === 'boolean') {
      queryParams = queryParams.append('winner', winners);
    }
    if (year) {
      queryParams = queryParams.append('year', year);
    }
    return this.httpClient.get<MovieList>(this.api, { params: queryParams });
  }

}
