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
import { ProjectsPagePersonalProfileComponent } from './components/projects-page-personal-profile/projects-page-personal-profile.component';
import { HomePagePersonalProfileMainSliderComponent } from './components/home-page-personal-profile/inner-items/home-page-personal-profile-main-slider/home-page-personal-profile-main-slider.component';
import { WhatServicesYouWillGetFromMePersonalProfileComponent } from './components/share/what-services-you-will-get-from-me-personal-profile/what-services-you-will-get-from-me-personal-profile.component';
import { HomePageContactMeNowPersonalProfileComponent } from './components/home-page-personal-profile/inner-items/home-page-contact-me-now-personal-profile/home-page-contact-me-now-personal-profile.component';
import { PositiveFeedbacksPersonalProfileComponent } from './components/share/positive-feedbacks-personal-profile/positive-feedbacks-personal-profile.component';
import { LetsWorkTogetherInquiryPersonalProfileComponent } from './components/share/lets-work-together-inquiry-personal-profile/lets-work-together-inquiry-personal-profile.component';
import { AboutMyselfPersonalProfileComponent } from './components/share/about-myself-personal-profile/about-myself-personal-profile.component';
import { ProjectsPageOurRecentProjectsPersonalProfileComponent } from './components/projects-page-personal-profile/inner-items/projects-page-our-recent-projects-personal-profile/projects-page-our-recent-projects-personal-profile.component';
import { HomePageInterestLatestPostPersonalProfileComponent } from './components/home-page-personal-profile/inner-items/home-page-interest-latest-post-personal-profile/home-page-interest-latest-post-personal-profile.component';
import {AboutPageOfferingToClientsPersonalProfileComponent} from './components/about-page-personal-profile/inner-items/about-page-offering-to-clients-personal-profile/about-page-offering-to-clients-personal-profile.component';
import {ProjectsPageMainSliderPersonalProfileComponent} from './components/projects-page-personal-profile/inner-items/projects-page-main-slider-personal-profile/projects-page-main-slider-personal-profile.component';
import {ServicePageMainSliderPersonalProfileComponent} from './components/services-page-personal-profile/inner-items/service-page-main-slider-personal-profile/service-page-main-slider-personal-profile.component';
import {ContactPageMainSliderPersonalProfileComponent} from './components/contact-page-personal-profile/inner-items/contact-page-main-slider-personal-profile/contact-page-main-slider-personal-profile.component';
import {AboutPageMainSliderPersonalProfileComponent} from './components/about-page-personal-profile/inner-items/about-page-main-slider-personal-profile/about-page-main-slider-personal-profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderLeftContentPersonalProfileComponent} from './components/header-personal-profile/inner-items/header-left-content-personal-profile/header-left-content-personal-profile.component';
import {HeaderRightContentPersonalProfileComponent} from './components/header-personal-profile/inner-items/header-right-content-personal-profile/header-right-content-personal-profile.component';
import {MatButtonModule} from '@angular/material/button';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {HeaderWhatServicesYouWillGetPersonalProfileComponent} from './components/share/what-services-you-will-get-from-me-personal-profile/inner-items/header-what-services-you-will-get-personal-profile/header-what-services-you-will-get-personal-profile.component';
import {ContentWhatServicesYouWillPersonalProfileComponent} from './components/share/what-services-you-will-get-from-me-personal-profile/inner-items/content-what-services-you-will-personal-profile/content-what-services-you-will-personal-profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ContentWhatServicesYouWillPersonalProfileMobileComponent} from './components/share/what-services-you-will-get-from-me-personal-profile/inner-items/content-what-services-you-will-personal-profile/inner-items/content-what-services-you-will-personal-profile-mobile/content-what-services-you-will-personal-profile-mobile.component';
import {ContentWhatServicesYouWillPersonalProfileWebComponent} from './components/share/what-services-you-will-get-from-me-personal-profile/inner-items/content-what-services-you-will-personal-profile/inner-items/content-what-services-you-will-personal-profile-web/content-what-services-you-will-personal-profile-web.component';
import {ContentWhatServicesYouWillPersonalProfileUIUXComponent} from './components/share/what-services-you-will-get-from-me-personal-profile/inner-items/content-what-services-you-will-personal-profile/inner-items/content-what-services-you-will-personal-profile-ui-ux/content-what-services-you-will-personal-profile-ui-ux.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ContentWhatServicesYouWillPersonalProfileAllComponent} from './components/share/what-services-you-will-get-from-me-personal-profile/inner-items/content-what-services-you-will-personal-profile/inner-items/content-what-services-you-will-personal-profile-all/content-what-services-you-will-personal-profile-all.component';
import {PositiveFeedbacksPersonalProfileHeaderComponent} from './components/share/positive-feedbacks-personal-profile/inner-items/positive-feedbacks-personal-profile-header/positive-feedbacks-personal-profile-header.component';
import {PositiveFeedbacksPersonalProfileContentComponent} from './components/share/positive-feedbacks-personal-profile/inner-items/positive-feedbacks-personal-profile-content/positive-feedbacks-personal-profile-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPersonalProfileComponent,
    FooterPersonalProfileComponent,
    HomePagePersonalProfileComponent,
    AboutPagePersonalProfileComponent,
    ServicesPagePersonalProfileComponent,
    ContactPagePersonalProfileComponent,
    ProjectsPagePersonalProfileComponent,
    HomePagePersonalProfileMainSliderComponent,
    WhatServicesYouWillGetFromMePersonalProfileComponent,
    HomePageContactMeNowPersonalProfileComponent,
    PositiveFeedbacksPersonalProfileComponent,
    LetsWorkTogetherInquiryPersonalProfileComponent,
    AboutMyselfPersonalProfileComponent,
    ProjectsPageOurRecentProjectsPersonalProfileComponent,
    HomePageInterestLatestPostPersonalProfileComponent,
    AboutPageOfferingToClientsPersonalProfileComponent,
    ProjectsPageMainSliderPersonalProfileComponent,
    ServicePageMainSliderPersonalProfileComponent,
    ContactPageMainSliderPersonalProfileComponent,
    AboutPageMainSliderPersonalProfileComponent,
    HeaderLeftContentPersonalProfileComponent,
    HeaderRightContentPersonalProfileComponent,
    HeaderWhatServicesYouWillGetPersonalProfileComponent,
    ContentWhatServicesYouWillPersonalProfileComponent,
    ContentWhatServicesYouWillPersonalProfileMobileComponent,
    ContentWhatServicesYouWillPersonalProfileWebComponent,
    ContentWhatServicesYouWillPersonalProfileUIUXComponent,
    ContentWhatServicesYouWillPersonalProfileAllComponent,
    PositiveFeedbacksPersonalProfileHeaderComponent,
    PositiveFeedbacksPersonalProfileContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CarouselModule,
    MatTabsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
