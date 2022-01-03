import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-content-what-services-you-will-personal-profile-ui-ux',
  templateUrl: './content-what-services-you-will-personal-profile-ui-ux.component.html',
  styleUrls: ['./content-what-services-you-will-personal-profile-ui-ux.component.scss']
})
export class ContentWhatServicesYouWillPersonalProfileUIUXComponent implements OnInit {

  col1Url: any;
  col2Url: any;
  col3Url: any;
  col4Url: any;
  col5Url: any;
  col6Url: any;
  col7Url: any;
  col8Url: any;
  col9Url: any;
  col10Url: any;
  col11Url: any;
  col12Url: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.col1Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2F2f231437-8d61-4ce5-aa21-b87f9075c03d%20(1).JPG?alt=media&token=f28cb549-64fb-4976-bdc9-70c9ba6b9680');
    this.col2Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2FLogo%201%20png.png?alt=media&token=47aa6219-c991-4240-9992-daf7594869ef');
    this.col3Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2FLogo%204.jpg?alt=media&token=fbfe2daa-0bf4-46b9-86fa-b6bb1d465806');
    this.col4Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2FIMG_9372.JPG?alt=media&token=a6d1bd19-4111-4301-8e68-50abeff0405a');
    this.col5Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2F5bac7509-f79e-41b2-8c61-dc80d06f4615.JPG?alt=media&token=890215fb-91c4-48fd-a583-19aa8a34f3db');
    this.col6Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/mobile%2FApp%20final%20final.jpg?alt=media&token=465156ed-a321-4938-a814-91f4501ad041');
    this.col7Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2FIMG_9450.JPG?alt=media&token=3976761f-0294-4e30-aa55-3639b15d7257');
    this.col8Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2Fea31bfa5-667f-44f1-8c81-1cdac1f20f8f.JPG?alt=media&token=e039d6e4-f17d-4ee0-a9af-ca13612daa7e');
    this.col9Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2Flogo%202%20jpg.jpg?alt=media&token=8318f7c9-34c2-4570-b9a9-df9f2e533dfa');
    this.col10Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2FEaster%20sunday%20final.mp4?alt=media&token=514e0497-8f24-4351-bab6-926ace4ec128');
    this.col11Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2Flogo%202%20jpg.jpg?alt=media&token=8318f7c9-34c2-4570-b9a9-df9f2e533dfa');
    this.col12Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/UIUX%2Flogo%202%20jpg.jpg?alt=media&token=8318f7c9-34c2-4570-b9a9-df9f2e533dfa');
  }

}
