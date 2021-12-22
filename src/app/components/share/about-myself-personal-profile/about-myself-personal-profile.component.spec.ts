import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyselfPersonalProfileComponent } from './about-myself-personal-profile.component';

describe('AboutMyselfPersonalProfileComponent', () => {
  let component: AboutMyselfPersonalProfileComponent;
  let fixture: ComponentFixture<AboutMyselfPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMyselfPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMyselfPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
