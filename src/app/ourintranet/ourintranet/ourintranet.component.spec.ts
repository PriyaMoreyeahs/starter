import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurintranetComponent } from './ourintranet.component';

describe('OurintranetComponent', () => {
  let component: OurintranetComponent;
  let fixture: ComponentFixture<OurintranetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurintranetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurintranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
