import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpService],
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  it('should return expected value', () => {
    const service: HttpService = TestBed.get(HttpService);
    service.getObservable().subscribe(res => expect(res.id).toBe(1));
  });

  it('http', () => {
    const service: HttpService = TestBed.get(HttpService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    const expectedUrl = 'whatever';

    service.makeRequest(expectedUrl).subscribe(res => expect(res.id).toBe(1))

    const expectedOne = httpMock.expectOne(expectedUrl)
    expectedOne.flush({ id: 1 });

    httpMock.verify()
  });

});
