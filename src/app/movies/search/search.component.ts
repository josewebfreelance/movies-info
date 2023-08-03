import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MoviesService} from "../services/movies.service";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  @Output() isOpen: EventEmitter<boolean> = new EventEmitter();

  search = new FormControl<string | any>('');
  movies: any[] = [];

  constructor(
    private moviesService: MoviesService
  ) {
  }

  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next: (value) => this.moviesSearch()
    })
  }

  moviesSearch(): void {
    const {value} = this.search;

    if (value.toString().trim() === '')
      this.search.setValue(value.toString().trim());

    if (value.toString().trim() !== '') {
      this.getSearchMovie(value);
    }
  }

  getSearchMovie(value: any) {
    this.moviesService.querySearchMovie({query: value}).subscribe({
      next: (response: any) => this.movies = response.results
    })
  }

  clearSearch(): void {
    this.search.setValue('');
    this.getSearchMovie('');
  }

  changeStatus(): void {
    this.isOpen.emit(false);
  }
}
