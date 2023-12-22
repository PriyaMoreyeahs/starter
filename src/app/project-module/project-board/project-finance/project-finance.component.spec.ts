import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFinanceComponent } from './project-finance.component';

describe('ProjectFinanceComponent', () => {
  let component: ProjectFinanceComponent;
  let fixture: ComponentFixture<ProjectFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectFinanceComponent]
    });
    fixture = TestBed.createComponent(ProjectFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
