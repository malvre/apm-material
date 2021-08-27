import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  myKey: string = '1bd0b632';

  constructor(private http: HttpClient) {}

  findAll(term: string): Observable<any> {
    return this.http
      .get(`https://www.omdbapi.com/?apikey=${this.myKey}&s=${term}`)
      .pipe(delay(1000));
  }
}
