import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmtcategoryComponent } from './amtcategory.component';

describe('AmtcategoryComponent', () => {
  let component: AmtcategoryComponent;
  let fixture: ComponentFixture<AmtcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmtcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmtcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
