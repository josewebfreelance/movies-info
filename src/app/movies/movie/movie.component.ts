import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {Plugin} from "@egjs/ngx-flicking";
import {AutoPlay, Fade} from '@egjs/flicking-plugins';
import {GenresService} from "../services/genres.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieComponent implements OnInit {

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

  genres: any[] = [];
  protected readonly Fade = Fade;

  constructor(
    private moviesService: MoviesService,
    private genresService: GenresService
  ) {
  }

  ngOnInit() {
    this.getNowPlayingMovies();
    this.getPopularMovies();
    this.getGenres();
  }

  getGenres() {
    this.genresService.queryGenres('movie').subscribe({
      next: (response: any) => this.genres = response.genres
    })
  }

  getNowPlayingMovies() {
    this.moviesService.queryMovies('now_playing').subscribe({
      next: (response: any) => {
        this.moviesNowPlaying = response.results;

        this.moviesNowPlaying.forEach((item, index) => {
          if (this.headerMovies.length < 10) {
            if (item.overview.length)
              this.headerMovies.push(item)
          }
        })
      }
    })
  }

  getPopularMovies() {
    this.moviesService.queryMovies('popular').subscribe({
      next: (response: any) => {
        this.popularMovies = response.results;
      }
    })
  }

  onNeedPanel(event: any) {
    console.log(event)
  }
}
