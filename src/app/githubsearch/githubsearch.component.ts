import { Component, OnInit, ViewChild, ChangeDetectorRef   } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from '../models/user';
import { Repository } from '../models/repository';
import { Commit} from '../models/commit';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.scss']
})
export class GithubsearchComponent implements OnInit {

  displayedColumns= ["url", "name", "created_at"];
  commitDisplayedColumns= ["email", "created_at", "url"];
  dataSource;
  commitDataSource;
  noError = true;
  notCommitTable = true;
  errorMessage;
  model = new User();
  submitted = false;
  commits: Commit[] = [];
 
  onSubmit() { this.submitted = true; }

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private data: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  }


  getUserRepos(q: string) {

    if (q !== "") {

      this.data.getUsersRepos(q).subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data);
          this.noError = true;
          this.notCommitTable = true;
          /** using detectChanges otherwise this.paginator will remain
           * undefined since <mat-paginator> 
           * is inside a container that has an *ngIf that only renders 
           * when data is loaded
           */
          this.model.repositories = data;
          this.cdr.detectChanges();
          this.dataSource.paginator = this.paginator;  

        }, err => {

          this.noError = false;
          this.errorMessage = err;          
          this.cdr.detectChanges();

      });  

    }

}

getRepoCommits(q: string) {

  if (q !== "") {

    this.data.getRepoCommits(q, this.model.userID).subscribe(
      data => {
        this.commitDataSource = new MatTableDataSource(data);
        this.notCommitTable = false;

        /** using detectChanges otherwise this.paginator will remain
         * undefined since <mat-paginator> 
         * is inside a container that has an *ngIf that only renders 
         * when data is loaded
         */
        this.commits = data;
        this.cdr.detectChanges();
        this.commitDataSource.paginator = this.paginator;     
      }, err => {

        this.noError = false;
        this.notCommitTable = true;
        this.errorMessage = err;          
        this.cdr.detectChanges();

    });  

  }

}




}
