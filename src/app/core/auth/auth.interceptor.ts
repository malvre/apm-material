import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.auth.isAuthenticated) {
      console.log('intercepted and authenticated', this.auth.token);

      const authRequest = request.clone({
        // setHeaders: {
        //   Authorization: `Bearer ${this.auth.token}`,
        // },
      });
      return next.handle(authRequest).pipe(
        catchError((err) => {
          if (err.status === 401) {
            this.auth.logout();
          }

          const error = err.error.message || err.statusText;
          return throwError(error);
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
