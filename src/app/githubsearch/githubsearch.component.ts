import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.scss']
})
export class GithubsearchComponent implements OnInit {

  repos$: Object;
  displayedColumns= ["url", "name", "created_at"];


  constructor(private data: DataService) { }

  ngOnInit() {
  }

 

  getUserRepos(q: string) {

    if (q !== "") {

      this.data.getUsersRepos(q).subscribe(
        data => this.repos$ = data 
      );  

    }

}



}
