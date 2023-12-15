import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmytravelComponent } from './bookmytravel.component';

describe('BookmytravelComponent', () => {
  let component: BookmytravelComponent;
  let fixture: ComponentFixture<BookmytravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmytravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmytravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
