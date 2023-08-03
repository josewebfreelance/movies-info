import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {Plugin} from "@egjs/ngx-flicking";
import {Fade, AutoPlay, Pagination} from '@egjs/flicking-plugins';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent implements OnInit {

  public plugins: Plugin[] = [
    new Fade(),
    new AutoPlay({ duration: 6000, animationDuration: -100, direction: 'NEXT' })
  ];

  moviesNowPlaying: any[] = [];
  test: any[] = [];

  constructor(
    private moviesService: MoviesService
  ) {
  }

  ngOnInit() {
    this.getMoviesNowPlaying();
  }

  getMoviesNowPlaying() {
    this.moviesService.queryNowPlayingMovies().subscribe({
      next: (response: any) => {
        this.moviesNowPlaying = response.results;

        this.moviesNowPlaying.forEach((item, index) => {
          if (index < 10) {
            this.test.push(item)
          }
        })
      }
    })
  }

  onNeedPanel(event: any) {
    console.log(event)
  }

  protected readonly Fade = Fade;
}
