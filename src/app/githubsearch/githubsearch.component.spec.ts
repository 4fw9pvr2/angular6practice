import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubsearchComponent } from './githubsearch.component';

describe('GithubsearchComponent', () => {
  let component: GithubsearchComponent;
  let fixture: ComponentFixture<GithubsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
