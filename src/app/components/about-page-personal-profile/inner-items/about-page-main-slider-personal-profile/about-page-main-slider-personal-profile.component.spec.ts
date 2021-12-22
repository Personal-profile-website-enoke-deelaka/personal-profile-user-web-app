import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageMainSliderPersonalProfileComponent } from './about-page-main-slider-personal-profile.component';

describe('AboutPageMainSliderPersonalProfileComponent', () => {
  let component: AboutPageMainSliderPersonalProfileComponent;
  let fixture: ComponentFixture<AboutPageMainSliderPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPageMainSliderPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageMainSliderPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
