import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPageOurRecentProjectsPersonalProfileComponent } from './projects-page-our-recent-projects-personal-profile.component';

describe('ProjectsPageOurRecentProjectsPersonalProfileComponent', () => {
  let component: ProjectsPageOurRecentProjectsPersonalProfileComponent;
  let fixture: ComponentFixture<ProjectsPageOurRecentProjectsPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsPageOurRecentProjectsPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPageOurRecentProjectsPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
