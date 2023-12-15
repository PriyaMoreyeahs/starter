import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavedashboardComponent } from './leavedashboard.component';

describe('LeavedashboardComponent', () => {
  let component: LeavedashboardComponent;
  let fixture: ComponentFixture<LeavedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
