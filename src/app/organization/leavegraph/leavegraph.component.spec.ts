import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavegraphComponent } from './leavegraph.component';

describe('LeavegraphComponent', () => {
  let component: LeavegraphComponent;
  let fixture: ComponentFixture<LeavegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavegraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
