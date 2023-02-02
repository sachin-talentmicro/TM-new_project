import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'iswindows': '1',
      'Region': 'IN'
    }),
  };

  login(payload: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'iswindows': '1',
        'Region': 'IN',
        'Ip': payload.ip
      }),
    };

    return this.http.post<any>('http://icanrefer.jobraiser.com/api/icr/weblogin?lngId=1&xes=1',
      JSON.stringify(payload),
      httpOptions
    )      .pipe(retry(1), catchError(this.handleError));
  }

  getIpInformation(): Observable<any> {
    return this.http.get<any>('https://ipinfo.io/?token=f411bffc738445')
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
