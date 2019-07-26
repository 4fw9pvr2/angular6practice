import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRepos() {
    return this.http.get('https://api.github.com/search/repositories?q=user:tom')
  }

  getUsersRepos(userId) {
    return this.http.get('https://api.github.com/search/repositories?q=user:'+userId)
  }

  getRepo(repositoryurl) {
    return this.http.get(repositoryurl)
  }


}
