import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleReviewsComponent } from './console-reviews.component';

describe('ConsoleReviewsComponent', () => {
  let component: ConsoleReviewsComponent;
  let fixture: ComponentFixture<ConsoleReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
