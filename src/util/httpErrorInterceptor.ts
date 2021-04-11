import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoaderService } from 'src/app/views/loader/loader.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private snackBar: MatSnackBar,
    private loaderService: LoaderService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();

    return next.handle(request).pipe(
      retry(1),
      catchError((errorResponse: HttpErrorResponse) => {
        this.loaderService.hideLoader();
        let errorMessage = '';

        // client-side error message
        errorMessage = `Error: Network Unreachable`;

        this.snackBar.open(errorMessage, 'OK', {
          duration: 3000,
        });

        return throwError(errorMessage);
      })
    );
  }
}
