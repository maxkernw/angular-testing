import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getObservable(): Observable<{ id: number }> {
    return of({ id: 1 });
  }

  makeRequest(url: string): Observable<{ id: number }> {
    return this.httpClient.get<{ id: number }>(url);
  }
}
