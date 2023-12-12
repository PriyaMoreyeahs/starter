import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavecountComponent } from './leavecount.component';

describe('LeavecountComponent', () => {
  let component: LeavecountComponent;
  let fixture: ComponentFixture<LeavecountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavecountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
