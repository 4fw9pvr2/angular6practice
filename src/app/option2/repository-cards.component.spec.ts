import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryCardsComponent } from './repository-cards.component';

describe('RepositoryCardsComponent', () => {
  let component: RepositoryCardsComponent;
  let fixture: ComponentFixture<RepositoryCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
