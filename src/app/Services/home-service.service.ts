import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { FileLike } from '@bytescale/upload-widget';
import { FileInput } from 'ngx-material-file-input';
@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  private apiUrl = 'http://localhost:5000/predict';
  private apiUrlGenerative = 'http://localhost:5000/generate';

  constructor(private http: HttpClient) {}

  predict(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    console.log(image);
    return this.http
      .post<any>(this.apiUrl, formData)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
  generate(text: any): Observable<any> {
    return this.http
      .post<any>(this.apiUrlGenerative, text)
      .pipe(catchError(this.handleError));
  }
}
