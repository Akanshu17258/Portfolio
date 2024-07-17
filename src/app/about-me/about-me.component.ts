import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from "aos"
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})



export class AboutMeComponent implements AfterViewInit {

constructor(@Inject(PLATFORM_ID) private platformId: Object){}
ngAfterViewInit() {
  if (isPlatformBrowser(this.platformId)) {
    AOS.init(); // Initialize AOS only if on the client side
  }
}
}
