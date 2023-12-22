import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownfoeEmployeeComponent } from './dropdownfoe-employee.component';

describe('DropdownfoeEmployeeComponent', () => {
  let component: DropdownfoeEmployeeComponent;
  let fixture: ComponentFixture<DropdownfoeEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownfoeEmployeeComponent]
    });
    fixture = TestBed.createComponent(DropdownfoeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
