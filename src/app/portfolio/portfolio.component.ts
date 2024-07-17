import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DataServiceService } from '../data-service.service';
import AOS from 'aos';
import { Project } from '../project.interface';

/**
 * Component for displaying a portfolio of projects.
 */
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  // Education=false;
  Experience = true;
  Project = false;
  constructor(private router: Router, public dS: DataServiceService, @Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialize AOS only if on the client side
    }
  }
  /** List of projects for the portfolio. */
  projectList: Project[]= []
  test = {}
  
  /**
   * Constructor for PortfolioComponent.
   * @param router - The Angular router service.
   * @param dS - The data service for managing project data.
   */

  /** Reference to the portfolio element. */
  @ViewChild('portfolio', { static: false })
  portfolio!: ElementRef;

  /**
   * Redirects to the project's URL in a new tab.
   * @param projectUrl - The URL of the project.
   */
  redirectToProject(projectUrl: string): void {
    window.open(projectUrl, '_blank');
  }
  
}
