import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError, map  } from 'rxjs/operators';
import { Repository, RepositoryAdapter } from './models/repository';
import { Commit, CommitAdapter } from './models/commit';
import { Branch, BranchAdapter } from './models/branch';
import { BranchDetails, BranchDetailsAdapter } from './models/branch.details';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private repadapter: RepositoryAdapter, private comadapter: CommitAdapter, private branchadapter: BranchAdapter, private branchdetailsadapter: BranchDetailsAdapter) { }

  getRepos() {
    return this.http.get('https://api.github.com/search/repositories?q=user:tom')
  }

  getUsersRepos(userId): Observable<Repository[]>{

    return this.http.get('https://api.github.com/search/repositories?q=user:'+userId).pipe(
        map((data: any[]) => data["items"].map(item => this.repadapter.adapt(item))),
        catchError(this.handleError)
      );
  }

  getRepoCommits(repoName, userId): Observable<Commit[]>{

    let endPoint = 'https://api.github.com/repos/' + userId + '/' + repoName + '/commits';
    return this.http.get(endPoint).pipe(
      map((data: any[]) => data.map(item => this.comadapter.adapt(item))),
      catchError(this.handleError)
    );
}  

getRepoBranches(repoName, userId): Observable<Branch[]>{

  let endPoint = 'https://api.github.com/repos/' + userId + '/' + repoName + '/branches';
  return this.http.get(endPoint).pipe(
    map((data: any[]) => data.map(item => this.branchadapter.adapt(item))),
    catchError(this.handleError)
  );
} 

getBranchDetails(repoName, userId, commitSha, index): Observable<BranchDetails>{

  let endPoint = 'https://api.github.com/repos/' + userId + '/' + repoName + '/commits/' + commitSha;
  return this.http.get(endPoint).pipe(
    map((data: any)=> new BranchDetails(
      
      data.commit.author.name,
      data.commit.author.date,
      data.commit.message,
      index
    )),
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
    
      } else if (error.error.message ===  "Git Repository is empty.") {
        return throwError(
          "Git Repository is empty.");

      }else {

    return throwError(
      'Something bad happened; please try again later.');
    }
  };




}
