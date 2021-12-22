import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageInterestLatestPostPersonalProfileComponent } from './home-page-interest-latest-post-personal-profile.component';

describe('HomePageInterestLatestPostPersonalProfileComponent', () => {
  let component: HomePageInterestLatestPostPersonalProfileComponent;
  let fixture: ComponentFixture<HomePageInterestLatestPostPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageInterestLatestPostPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageInterestLatestPostPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
