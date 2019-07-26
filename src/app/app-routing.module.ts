import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';
import { Option4Component } from './option4/option4.component';
import { Option5Component } from './option5/option5.component';
import { Option6Component } from './option6/option6.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'githubsearch',
    component: GithubsearchComponent
  },
  {
    path: 'option2',
    component: Option2Component
  },
  {
    path: 'option3',
    component: Option3Component
  },
  {
    path: 'option4',
    component: Option4Component
  },
  {
    path: 'option5',
    component: Option5Component
  },
  {
    path: 'option6',
    component: Option6Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
