import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {Plugin} from "@egjs/ngx-flicking";
import {AutoPlay, Fade} from '@egjs/flicking-plugins';
import {GenresService} from "../services/genres.service";
import {Subscription} from "rxjs";
import {NgxToastService} from "@angular-magic/ngx-toast";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieComponent implements OnInit, OnDestroy {

  observers: Array<Subscription> = [];

  public plugins: Plugin[] = [
    new Fade(),
    new AutoPlay({duration: 2000, direction: "NEXT", stopOnHover: false})
  ];

  options: any = {
    circular: true, horizontal: true
  }

  moviesNowPlaying: any[] = [];
  headerMovies: any[] = [];
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];

  genres: any[] = [];

  constructor(
    private moviesService: MoviesService,
    private genresService: GenresService,
    private ngxToastService: NgxToastService
  ) {
  }

  ngOnInit() {
    this.getNowPlayingMovies();
    this.getPopularMovies();
    this.getGenres();
    this.getTopRatedMovies();
  }

  getGenres() {
    const genre$: Subscription = this.genresService.queryGenres('movie').subscribe({
      next: (response: any) => this.genres = response.genres,
      error: (err: HttpErrorResponse) => this.ngxToastService.error({ title: 'Error', messages: [err.message]})
    })

    this.observers.push(genre$);
  }

  getNowPlayingMovies() {
    const nowPlayingMovies$: Subscription = this.moviesService.queryMovies('now_playing').subscribe({
      next: (response: any) => {
        this.moviesNowPlaying = response?.results;
      },
      error: (err: HttpErrorResponse) => this.ngxToastService.error({ title: 'Error', messages: [err.message]})
    });

    this.observers.push(nowPlayingMovies$);
  }

  getPopularMovies() {
    const popularMovies$: Subscription = this.moviesService.queryMovies('popular').subscribe({
      next: (response: any) => {
        this.popularMovies = response.results;
      },
      error: (err: HttpErrorResponse) => this.ngxToastService.error({ title: 'Error', messages: [err.message]})
    })

    this.observers.push(popularMovies$);
  }

  getTopRatedMovies(): void {
    const topRatedMovie$ = this.moviesService.queryTopRatedMovie().subscribe({
      next: (response: any) => {
        this.topRatedMovies = response.results;
      },
      error: (err: HttpErrorResponse) => this.ngxToastService.error({ title: 'Error', messages: [err.message]})
    });

    this.observers.push(topRatedMovie$);
  }

  ngOnDestroy() {
    this.observers.forEach((observer: Subscription) => {
      observer.unsubscribe();
    });
  }
}
