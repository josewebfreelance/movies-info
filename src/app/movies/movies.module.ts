import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MaterialModule} from "../shared/materialmodule/material.module";

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MoviesModule { }
