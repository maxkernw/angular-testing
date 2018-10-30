import { HttpService } from './http.service';
import { Observable, of } from 'rxjs';



export class HttpServiceMock {
    getObservable(): Observable<{ id: number; }> {
        return of({ id: 1 })
    }
    makeRequest(url: string): Observable<{ id: number; }> {
        return of({ id: 1 })
    }
}