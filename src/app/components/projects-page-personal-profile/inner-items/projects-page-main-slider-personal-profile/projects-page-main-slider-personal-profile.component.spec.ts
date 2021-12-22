import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPageMainSliderPersonalProfileComponent } from './projects-page-main-slider-personal-profile.component';

describe('ProjectsPageMainSliderPersonalProfileComponent', () => {
  let component: ProjectsPageMainSliderPersonalProfileComponent;
  let fixture: ComponentFixture<ProjectsPageMainSliderPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsPageMainSliderPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPageMainSliderPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
