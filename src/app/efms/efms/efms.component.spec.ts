import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfmsComponent } from './efms.component';

describe('EfmsComponent', () => {
  let component: EfmsComponent;
  let fixture: ComponentFixture<EfmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
