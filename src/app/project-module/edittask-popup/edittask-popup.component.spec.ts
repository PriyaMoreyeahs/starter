import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittaskPopupComponent } from './edittask-popup.component';

describe('EdittaskPopupComponent', () => {
  let component: EdittaskPopupComponent;
  let fixture: ComponentFixture<EdittaskPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdittaskPopupComponent]
    });
    fixture = TestBed.createComponent(EdittaskPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
