import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent {

  movie: any = {};

  cast: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      const {id} = params;

      if (id) {
        this.getMoviesById(id);
        this.getCredits(id);
      }
    });
  }

  getMoviesById(movieId: number): void {
    this.moviesService.queryMoviesById(movieId).subscribe({
      next: (response: any) => this.movie = response
    })
  }

  getCredits(movieId: number): void {
    this.moviesService.queryCredits(movieId).subscribe({
      next: (response: any) => this.cast = response.cast
    })
  }

}
