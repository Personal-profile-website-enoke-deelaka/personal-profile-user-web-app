import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home-page-personal-profile-main-slider',
  templateUrl: './home-page-personal-profile-main-slider.component.html',
  styleUrls: ['./home-page-personal-profile-main-slider.component.scss']
})
export class HomePagePersonalProfileMainSliderComponent implements OnInit {
  advertisements: any[] = [
    '/assets/Images/Enoke1.png',
    // '/assets/Images/Enoke2.png',
    // '/assets/Images/Enoke3.png',
    // 'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg',
    // 'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
    // // 'https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg',
    // // 'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1,
        nav: false
      },
      576: {
        items: 1,
        nav: true
      },
      780: {
        items: 1,
        nav: true
      },
      1018: {
        items: 1,
        nav: true
      },
      1326: {
        items: 1,
        nav: true
      },
      1636: {
        items: 1,
        nav: true
      },
      2560: {
        items: 1,
        nav: true
      }
    },
    nav: false
  };

}
