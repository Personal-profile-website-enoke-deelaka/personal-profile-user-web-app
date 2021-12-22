import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsWorkTogetherInquiryPersonalProfileComponent } from './lets-work-together-inquiry-personal-profile.component';

describe('LetsWorkTogetherInquiryPersonalProfileComponent', () => {
  let component: LetsWorkTogetherInquiryPersonalProfileComponent;
  let fixture: ComponentFixture<LetsWorkTogetherInquiryPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsWorkTogetherInquiryPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsWorkTogetherInquiryPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
