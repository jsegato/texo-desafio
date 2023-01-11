import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';

import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';

import { TopWinningStudiosComponent } from './components/top-winning-studios/top-winning-studios.component';
import { WinningMoviesByYearComponent } from './components/winning-movies-by-year/winning-movies-by-year.component';
import { YearsWithMultipleWinningMoviesComponent } from './components/years-with-multiple-winning-movies/years-with-multiple-winning-movies.component';
import { ProducersMinMaxWinningIntervalsComponent } from './components/producers-min-max-winning-intervals/producers-min-max-winning-intervals.component';

@NgModule({
  declarations: [
    TopWinningStudiosComponent,
    WinningMoviesByYearComponent,
    YearsWithMultipleWinningMoviesComponent,
    ProducersMinMaxWinningIntervalsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TopWinningStudiosComponent,
    WinningMoviesByYearComponent,
    YearsWithMultipleWinningMoviesComponent,
    ProducersMinMaxWinningIntervalsComponent
  ]
})
export class MoviesModule { }
