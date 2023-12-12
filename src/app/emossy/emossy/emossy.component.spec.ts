import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmossyComponent } from './emossy.component';

describe('EmossyComponent', () => {
  let component: EmossyComponent;
  let fixture: ComponentFixture<EmossyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmossyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmossyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
