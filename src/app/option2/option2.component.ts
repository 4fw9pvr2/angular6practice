import { Component, OnInit, ViewChild, ChangeDetectorRef   } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from '../models/user';
import { Repository } from '../models/repository';
import { Commit} from '../models/commit';
import { NgForm } from '@angular/forms';
import { Branch } from '../models/branch';
import { BranchDetails } from '../models/branch.details';

@Component({
  selector: 'app-option2',
  templateUrl: './option2.component.html',
  styleUrls: ['./option2.component.scss']
})
export class Option2Component implements OnInit {


    commitDisplayedColumns= ["author", "message", "created_at", "commitID"];
    branchDisplayedColumns= ["author", "branch_name", "message", "created_at", "commitID"];
    dataSource;
    gotRepos;
    repoSelected;
    commitDataSource;
    branchDataSource
    noRepoError = true;
    noCommitError = true;
    noBranchError = true;
    noBranchDetailsError = true;    
    errorMessage;
    user = new User();
    repositoryName;
    userID;   //only changes upon submit
    commits: Commit[] = [];   
    selection = new SelectionModel(false, []);
    tableSelection = new SelectionModel(false, []);
    branches: Branch[] =[];

    
    @ViewChild(NgForm) myForm: NgForm;

    
   
 


    onSubmit() { 

      this.cleanComponent();
      this.userID = this.user.userID;      
      this.tableSelection.select('commit');
      this.getUserRepos(this.userID); 


    }
  
    reset() { 
  
      this.cleanComponent();
      this.myForm.resetForm();

    }


    cleanComponent() {

      this.dataSource = new MatTableDataSource([]);
      this.commitDataSource = new MatTableDataSource([]);
      this.branchDataSource = new MatTableDataSource([]);
      this.selection = new SelectionModel(false, []);
      this.tableSelection = new SelectionModel(false, []);
      this.repoSelected = false;
      this.gotRepos = false;
      this.errorMessage = '';
      this.repositoryName = '';
      this.userID = '';
      this.noRepoError = true;
      this.noCommitError = true;
      this.noBranchError = true;
      this.noBranchDetailsError = true;
      
      
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
            /** using detectChanges otherwise this.paginator will remain
             * undefined since <mat-paginator> 
             * is inside a container that has an *ngIf that only renders 
             * when data is loaded
             */
            this.user.repositories = data;
            this.cdr.detectChanges();             
  
          }, err => {
            this.noRepoError = false;
            this.errorMessage = err;          
            this.cdr.detectChanges();
  
        });  
  
  }
  
  getRepoTable(repository: string){


    this.repoSelected = true;
    this.repositoryName = repository;
    if(this.tableSelection.isSelected('commit')){

      this.getRepoCommits();

    }else{

      this.getRepoBranches();

    }
      
  }




  getRepoCommits() {
  
    
      this.data.getRepoCommits(this.repositoryName, this.userID).subscribe(
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
  
  getRepoBranches() {

      
    this.data.getRepoBranches(this.repositoryName, this.userID).subscribe(
      branchData => {
        

        this.branches = branchData;

        for (var i = 0; i < this.branches.length; i++) {

          this.data.getBranchDetails(this.repositoryName, this.userID, this.branches[i].branchID, i).subscribe(
            branchDetailsData => {

              this.branches[branchDetailsData.index].branchDetails = branchDetailsData;
              
              if(branchDetailsData.index === this.branches.length-1 ){

                this.branchDataSource = new MatTableDataSource(this.branches);                
                this.cdr.detectChanges();
                this.branchDataSource.paginator = this.paginator;

              }

            }, err => {
              this.noBranchDetailsError = false;
              this.branches[i].branchDetails.created_at = new Date;   
              this.branches[i].branchDetails.message = "error";   
              this.branches[i].branchDetails.name = "error";  

          });  

        }


 

             

      }, err => {
        this.noBranchError = false;
        this.errorMessage = err;                  
        this.cdr.detectChanges();

    });  

}  
  
  
  }