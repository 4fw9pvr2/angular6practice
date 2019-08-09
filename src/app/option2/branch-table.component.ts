import { Component, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Branch } from '../models/branch';

@Component({
  selector: 'app-branch-table',
  templateUrl: './branch-table.component.html',
  styleUrls: ['./branch-table.component.scss']
})
export class BranchTableComponent  implements OnChanges{

  constructor(private cdr: ChangeDetectorRef) {}
  @Input()
  branches: Branch[]; 

  branchDataSource;

  branchDisplayedColumns= ["author", "branch_name", "message", "created_at", "commitID"];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnChanges(changes: SimpleChanges) {
    
    if (changes['branches']) {

          this.branchDataSource = new MatTableDataSource(this.branches);
          this.cdr.detectChanges();
          this.branchDataSource.paginator = this.paginator;
           
    }
    
  }


}