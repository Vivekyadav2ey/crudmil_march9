import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudservicesService {
      base_url:string='http://localhost:3000/Employee';
  constructor(public http:HttpClient) { }
  headers = new HttpHeaders().set('authkey', 'value');


 // Create
 create(data: any): Observable<any> {
  let API_URL = `${this.base_url}`;
  return this.http.post(API_URL, data)
    .pipe(
      catchError(this.handleError)
    )
}
  // Update
  update(id: any, data: any): Observable<any> {
    let API_URL = `${this.base_url}/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }

 // Read
 list() {
    debugger;
  return this.http.get(`${this.base_url}`,{headers:this.headers});
}

// Delete
delete(id: any): Observable<any> {
  var API_URL = `${this.base_url}/${id}`;
  return this.http.delete(API_URL).pipe(
    catchError(this.handleError)
  )
}


// Handle API errors
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
};

}
