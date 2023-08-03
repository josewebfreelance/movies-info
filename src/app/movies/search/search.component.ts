import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MoviesService} from "../services/movies.service";
import {debounceTime, Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {NotificationsAdapter} from "../../shared/adapters/notifications-adapter";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  observers: Array<Subscription> = [];

  @Output() isOpen: EventEmitter<boolean> = new EventEmitter();

  search = new FormControl<string | any>('');
  movies: any[] = [];

  constructor(
    private moviesService: MoviesService,
    private notifications: NotificationsAdapter
  ) {
  }

  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(250)
    ).subscribe({
      next: () => this.moviesSearch()
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
    const searchMovie$ = this.moviesService.querySearchMovie({query: value}).subscribe({
      next: (response: any) => this.movies = response.results,
      error: (err: HttpErrorResponse) => this.notifications.error({title: 'Error', messages: [err.message]})
    })

    this.observers.push(searchMovie$);
  }

  clearSearch(): void {
    this.search.setValue('');
    this.getSearchMovie('');
  }

  changeStatus(): void {
    this.isOpen.emit(false);
  }

  ngOnDestroy() {
    this.observers.forEach((observer: Subscription) => {
      observer.unsubscribe();
    });
  }
}
