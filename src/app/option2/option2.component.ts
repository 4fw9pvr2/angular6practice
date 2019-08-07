import { Component, OnInit, ViewChild, ChangeDetectorRef   } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from '../models/user';
import { Repository } from '../models/repository';
import { Commit} from '../models/commit';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-option2',
  templateUrl: './option2.component.html',
  styleUrls: ['./option2.component.scss']
})
export class Option2Component implements OnInit {


    commitDisplayedColumns= ["author", "message", "created_at", "commitID"];
    dataSource;
    gotRepos;
    repoSelected;
    commitDataSource;
    noRepoError = true;
    noCommitError = true;
    errorMessage;
    user = new User();
    repositoryTitle;
    userTitle;
    commits: Commit[] = [];   
    selection;

    
    @ViewChild(NgForm) myForm: NgForm;
    
   
 


    onSubmit() { 
      this.repoSelected = false;
      this.gotRepos = false;
      this.errorMessage = '';
      this.noRepoError = true;
      this.noCommitError = true;
      this.selection = new SelectionModel(false, []);
      this.getUserRepos(this.user.userID); 


    }
  
    reset() { 
  

      this.myForm.resetForm();
      this.repoSelected = false;
      this.gotRepos = false;
      this.noRepoError = true;
      this.noCommitError = true;
      this.dataSource = new MatTableDataSource([]);
      this.commitDataSource = new MatTableDataSource([]);

      //this.cdr.detectChanges();

    }


    @ViewChild(MatPaginator) paginator: MatPaginator;

  
    constructor(private data: DataService, private cdr: ChangeDetectorRef) {}
  
    ngOnInit() {
    }
  
  
    getUserRepos(userID: string) {
      
        this.data.getUsersRepos(userID).subscribe(
          data => {
            this.dataSource = new MatTableDataSource(data);
            this.gotRepos = true;
            this.noRepoError = true;
             this.userTitle = this.user.userID;
            /** using detectChanges otherwise this.paginator will remain
             * undefined since <mat-paginator> 
             * is inside a container that has an *ngIf that only renders 
             * when data is loaded
             */
            this.user.repositories = data;
            this.cdr.detectChanges();             
  
          }, err => {
            this.userTitle = "";
            this.noRepoError = false;
            this.errorMessage = err;          
            this.cdr.detectChanges();
  
        });  
  
  }
  
  getRepoCommits(repository: string) {
  
      this.repoSelected = true;
      this.repositoryTitle = repository;
      this.data.getRepoCommits(repository, this.user.userID).subscribe(
        data => {
          this.commitDataSource = new MatTableDataSource(data);          
          /** using detectChanges otherwise this.paginator will remain
           * undefined since <mat-paginator> 
           * is inside a container that has an *ngIf that only renders 
           * when data is loaded
           */
          this.commits = data;
          this.cdr.detectChanges();
          this.commitDataSource.paginator = this.paginator;     
        }, err => {
          
          this.noCommitError = false;
          this.errorMessage = err;          
          this.cdr.detectChanges();
  
      });  
  
  }
  
  
  
  
  }