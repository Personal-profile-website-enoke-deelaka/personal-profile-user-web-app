import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageMainSliderPersonalProfileComponent } from './contact-page-main-slider-personal-profile.component';

describe('ContactPageMainSliderPersonalProfileComponent', () => {
  let component: ContactPageMainSliderPersonalProfileComponent;
  let fixture: ComponentFixture<ContactPageMainSliderPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPageMainSliderPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageMainSliderPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
