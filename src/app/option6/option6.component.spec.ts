import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Option6Component } from './option6.component';

describe('Option6Component', () => {
  let component: Option6Component;
  let fixture: ComponentFixture<Option6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Option6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Option6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
