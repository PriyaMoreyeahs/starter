import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsreportComponent } from './skillsreport.component';

describe('SkillsreportComponent', () => {
  let component: SkillsreportComponent;
  let fixture: ComponentFixture<SkillsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
