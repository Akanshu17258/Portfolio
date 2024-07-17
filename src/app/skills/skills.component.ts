import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, Inject,PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

/**
 * Component for displaying skills with corresponding icons.
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
constructor( @Inject(PLATFORM_ID) private platformId: Object){}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialize AOS only if on the client side
    }
  }
  /** Reference to the skills element. */
  @ViewChild('skills') skills!: ElementRef;

  /** Array of image URLs representing skills icons. */
  imageUrls: string[] = [
    '/assets/img/icons/HTML.svg',
    '/assets/img/icons/CSS.svg',
    '/assets/img/icons/TypeScript.svg',
    '/assets/img/icons/JavaScript.svg',
    '/assets/img/icons/Angular.svg',
    // '/assets/img/icons/Firebase.svg',
    // '/assets/img/icons/WordPress.svg',
    '/assets/img/icons/Git.svg',
    // '/assets/img/icons/Rest-Api.svg',
    // '/assets/img/icons/Scrum.svg',
    // '/assets/img/icons/Material Design.svg',
  ];

  /**
   * Extracts the file name without extension from a given URL.
   * @param url - The URL of the file.
   * @returns The file name without extension.
   */
  getFileName(url: string): string {
    const fileNameWithExtension = url.split('/').pop(); 
    const fileNameWithoutExtension = fileNameWithExtension?.split('.')[0];
    return fileNameWithoutExtension || '';
  }
}
