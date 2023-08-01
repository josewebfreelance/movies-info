import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  moviesNowPlaying: any[] = [];

  constructor(
    private moviesService: MoviesService
  ) {
  }

  ngOnInit() {
    this.getMoviesNowPlaying();
  }

  getMoviesNowPlaying() {
    this.moviesService.queryNowPlayingMovies().subscribe({
      next: (response: any) => console.log(response)
    })
  }

}
