import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePagePersonalProfileComponent} from "./components/home-page-personal-profile/home-page-personal-profile.component";
import {AboutPagePersonalProfileComponent} from "./components/about-page-personal-profile/about-page-personal-profile.component";
import {ServicesPagePersonalProfileComponent} from "./components/services-page-personal-profile/services-page-personal-profile.component";
import {ProjectsPagePersonalProfileComponent} from "./components/projects-page-personal-profile/projects-page-personal-profile.component";
import {ContactPagePersonalProfileComponent} from "./components/contact-page-personal-profile/contact-page-personal-profile.component";


const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', component: HomePagePersonalProfileComponent},
  {path: 'about', component: AboutPagePersonalProfileComponent},
  {path: 'services', component: ServicesPagePersonalProfileComponent},
  {path: 'projects', component: ProjectsPagePersonalProfileComponent},
  {path: 'contact', component: ContactPagePersonalProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
