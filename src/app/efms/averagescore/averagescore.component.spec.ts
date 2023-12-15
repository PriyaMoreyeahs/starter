import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragescoreComponent } from './averagescore.component';

describe('AveragescoreComponent', () => {
  let component: AveragescoreComponent;
  let fixture: ComponentFixture<AveragescoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AveragescoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AveragescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
