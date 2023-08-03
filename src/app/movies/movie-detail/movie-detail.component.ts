import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../services/movies.service";
import {NgxToastService} from "@angular-magic/ngx-toast";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent implements OnDestroy {
  observers: Array<Subscription> = [];

  movie: any = {};

  cast: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private ngxToastService: NgxToastService
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
    const moviesById$ = this.moviesService.queryMoviesById(movieId).subscribe({
      next: (response: any) => this.movie = response,
      error: (err: HttpErrorResponse) => this.ngxToastService.error({ title: 'Error', messages: [err.message]})
    })

    this.observers.push(moviesById$);
  }

  getCredits(movieId: number): void {
    const credits$ = this.moviesService.queryCredits(movieId).subscribe({
      next: (response: any) => this.cast = response.cast,
      error: (err: HttpErrorResponse) => this.ngxToastService.error({ title: 'Error', messages: [err.message]})
    })

    this.observers.push(credits$);
  }

  ngOnDestroy() {
    this.observers.forEach((observer: Subscription) => {
      observer.unsubscribe();
    });
  }
}
