import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExpenseComponent } from './project-expense.component';

describe('ProjectExpenseComponent', () => {
  let component: ProjectExpenseComponent;
  let fixture: ComponentFixture<ProjectExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
