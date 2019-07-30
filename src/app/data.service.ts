import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRepos() {
    return this.http.get('https://api.github.com/search/repositories?q=user:tom')
  }

  getUsersRepos(userId) {
    return this.http.get('https://api.github.com/search/repositories?q=user:'+userId).pipe(

   catchError(this.handleError)

  );
  }

  getRepo(repositoryurl) {
    return this.http.get(repositoryurl)
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error.message ===  "Validation Failed") {
      return throwError(
        error.error.errors["0"].message);
    
      } else {

    return throwError(
      'Something bad happened; please try again later.');
    }
  };




}
