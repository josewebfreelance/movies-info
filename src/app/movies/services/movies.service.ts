import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../../shared/utilities/constants";
import {Params} from "../../shared/utilities/params.utility";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl = `${API_URL}`;
  private paramsObject = ['query'];

  constructor(
    private http: HttpClient
  ) { }

  queryMovies(segment: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${segment}?language=es`, {});
  }

  queryMoviesById(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?language=es`, {});
  }

  queryCredits(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/credits?language=es`, {});
  }

  querySearchMovie(params: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie?language=es`, {params: Params.getParams(params, this.paramsObject)});
  }

  queryTopRatedMovie(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/top_rated?language=es`, {});
  }
}
