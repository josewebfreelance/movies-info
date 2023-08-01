import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../../shared/utilities/constants";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl = `${API_URL}/movie`;

  constructor(
    private http: HttpClient
  ) { }

  queryNowPlayingMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/now_playing`, {});
  }
}
