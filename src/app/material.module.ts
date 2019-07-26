import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatTableModule, MatPaginatorModule  } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule 
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule { }
