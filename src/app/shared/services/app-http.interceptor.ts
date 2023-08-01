import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWU5MWFiODQ1ZDllZDBhMTNiZDM0YTE4ZTVhYmVmNyIsInN1YiI6IjY0MTg1MzQ1ZTc0MTQ2MDBmN2VmMzNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L-Ee74dlbZoRi77zx8dku-aTaszHHP6oih3DbfZ_1kY';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.token}`
      }
    })
    return next.handle(request);
  }
}
