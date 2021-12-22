import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePageMainSliderPersonalProfileComponent } from './service-page-main-slider-personal-profile.component';

describe('ServicePageMainSliderPersonalProfileComponent', () => {
  let component: ServicePageMainSliderPersonalProfileComponent;
  let fixture: ComponentFixture<ServicePageMainSliderPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePageMainSliderPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePageMainSliderPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
