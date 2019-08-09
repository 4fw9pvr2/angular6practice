import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryHeaderComponent } from './repository-header.component';

describe('RepositoryHeaderComponent', () => {
  let component: RepositoryHeaderComponent;
  let fixture: ComponentFixture<RepositoryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
