import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalmanagementComponent } from './goalmanagement.component';

describe('GoalmanagementComponent', () => {
  let component: GoalmanagementComponent;
  let fixture: ComponentFixture<GoalmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
