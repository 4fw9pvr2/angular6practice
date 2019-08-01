import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import {MatFormFieldModule, MatInputModule } from '@angular/material';

import { LayoutModule } from './layout/layout.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';
import { Option4Component } from './option4/option4.component';
import { Option5Component } from './option5/option5.component';
import { Option6Component } from './option6/option6.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubsearchComponent,
    Option2Component,
    Option3Component,
    Option4Component,
    Option5Component,
    Option6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
