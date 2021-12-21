import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPersonalProfileComponent } from './components/header-personal-profile/header-personal-profile.component';
import { FooterPersonalProfileComponent } from './components/footer-personal-profile/footer-personal-profile.component';
import { HomePagePersonalProfileComponent } from './components/home-page-personal-profile/home-page-personal-profile.component';
import { AboutPagePersonalProfileComponent } from './components/about-page-personal-profile/about-page-personal-profile.component';
import { ServicesPagePersonalProfileComponent } from './components/services-page-personal-profile/services-page-personal-profile.component';
import { ContactPagePersonalProfileComponent } from './components/contact-page-personal-profile/contact-page-personal-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPersonalProfileComponent,
    FooterPersonalProfileComponent,
    HomePagePersonalProfileComponent,
    AboutPagePersonalProfileComponent,
    ServicesPagePersonalProfileComponent,
    ContactPagePersonalProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
