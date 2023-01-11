import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from "primeng/paginator";

import { ListMoviesPage } from './list-movies.page';
import { ListMoviesPageRoutingModule } from './list-movies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableModule,
    PaginatorModule,
    ListMoviesPageRoutingModule
  ],
  declarations: [ListMoviesPage]
})
export class ListMoviesPageModule {}
