import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualfeedbackComponent } from './annualfeedback.component';

describe('AnnualfeedbackComponent', () => {
  let component: AnnualfeedbackComponent;
  let fixture: ComponentFixture<AnnualfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
