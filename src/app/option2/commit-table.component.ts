import { Component, Input, ViewChild, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Commit} from '../models/commit';

@Component({
  selector: 'app-commit-table',
  templateUrl: './commit-table.component.html',
  styleUrls: ['./commit-table.component.scss']
})
export class CommitTableComponent implements OnChanges{

  constructor(private cdr: ChangeDetectorRef) {}
  @Input()
  commits: Commit[]; 

  commitDataSource;

  commitDisplayedColumns= ["author", "message", "created_at", "commitID"];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnChanges(changes: SimpleChanges) {
    
    if (changes['commits']) {

          this.commitDataSource = new MatTableDataSource(this.commits);
          this.cdr.detectChanges();
          this.commitDataSource.paginator = this.paginator;
           
    }
    
  }


}
