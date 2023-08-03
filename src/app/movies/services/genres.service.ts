import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../shared/utilities/constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  apiUrl = `${API_URL}/genre`;

  constructor(
    private http: HttpClient
  ) { }

  queryGenres(type: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${type}/list?language=es`); // movie, tv
  }
}
