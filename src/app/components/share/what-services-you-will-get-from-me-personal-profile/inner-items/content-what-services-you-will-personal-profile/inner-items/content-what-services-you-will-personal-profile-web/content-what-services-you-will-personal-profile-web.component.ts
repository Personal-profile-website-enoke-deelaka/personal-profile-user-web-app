import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-content-what-services-you-will-personal-profile-web',
  templateUrl: './content-what-services-you-will-personal-profile-web.component.html',
  styleUrls: ['./content-what-services-you-will-personal-profile-web.component.scss']
})
export class ContentWhatServicesYouWillPersonalProfileWebComponent implements OnInit {
  col1Url: any;
  col2Url: any;
  col3Url: any;
  col4Url: any;
  col5Url: any;
  col6Url: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.col1Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/1.mp4?alt=media&token=622e8327-fd75-48c5-973e-660cd32556cf');
    this.col2Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/2.mp4?alt=media&token=c45af6c5-2491-4dd6-bd83-a710fa7a57ac');
    this.col3Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/mobile%2F8a4a8d4b-1469-4a00-8eb7-c24b5e183c75.JPG?alt=media&token=88f8b9f4-5a84-415b-b186-c127ab7ca1be');
    this.col4Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/mobile%2Ff89c3227-5cfc-4fc9-b337-75c52d1a48e3.JPG?alt=media&token=e6ea6b65-cb08-42e7-8496-c77c64e7c683');
    this.col5Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/mobile%2Ffc81614d-da64-4739-a7d3-afd2bccbc3b5.JPG?alt=media&token=43d86016-b16a-47ed-b15c-317be611feff');
    this.col6Url = this.sanitizer.bypassSecurityTrustResourceUrl('https://firebasestorage.googleapis.com/v0/b/personalwebsite-8046d.appspot.com/o/mobile%2FApp%20final%20final.jpg?alt=media&token=465156ed-a321-4938-a814-91f4501ad041');
  }
}
