import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveFeedbacksPersonalProfileComponent } from './positive-feedbacks-personal-profile.component';

describe('PositiveFeedbacksPersonalProfileComponent', () => {
  let component: PositiveFeedbacksPersonalProfileComponent;
  let fixture: ComponentFixture<PositiveFeedbacksPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveFeedbacksPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveFeedbacksPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
