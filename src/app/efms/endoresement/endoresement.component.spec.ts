import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoresementComponent } from './endoresement.component';

describe('EndoresementComponent', () => {
  let component: EndoresementComponent;
  let fixture: ComponentFixture<EndoresementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndoresementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndoresementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
