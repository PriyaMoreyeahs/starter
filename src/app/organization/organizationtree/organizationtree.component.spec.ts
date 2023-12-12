import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationtreeComponent } from './organizationtree.component';

describe('OrganizationtreeComponent', () => {
  let component: OrganizationtreeComponent;
  let fixture: ComponentFixture<OrganizationtreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationtreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
