import { Component, OnInit, ViewChild, ChangeDetectorRef   } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.scss']
})
export class GithubsearchComponent implements OnInit {

  displayedColumns= ["url", "name", "created_at"];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private data: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  }


  getUserRepos(q: string) {

    if (q !== "") {

      this.data.getUsersRepos(q).subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data["items"]);
          /** using detectChanges otherwise this.paginator will remain
           * undefined since <mat-paginator> 
           * is inside a container that has an *ngIf that only renders 
           * when data is loaded
           */
          this.cdr.detectChanges();
          this.dataSource.paginator = this.paginator;     
        });  

    }

}



}
