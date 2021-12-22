import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContactMeNowPersonalProfileComponent } from './home-page-contact-me-now-personal-profile.component';

describe('HomePageContactMeNowPersonalProfileComponent', () => {
  let component: HomePageContactMeNowPersonalProfileComponent;
  let fixture: ComponentFixture<HomePageContactMeNowPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageContactMeNowPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageContactMeNowPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
