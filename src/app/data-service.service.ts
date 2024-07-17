import { Injectable } from '@angular/core';
import { Project } from './project.interface';

/**
 * Service for managing data related to projects.
 */
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  /** Array containing project data. */
  public projectList: Project[];
  Experience :any[];
  
  /**
   * Constructor for DataServiceService.
   * Initializes the projectList array with project data.
   */
  constructor() {
    this.projectList = [
      {
        name: 'Compensation Administration-ACAT',
        company: 'Accenture',
        timeSpan:'April. 2022 - Present',
        description: "<ul><li>It is a web application basically designed for HR and management level 9 above for finalizing base pay, variable pay and award allocations for all employees of Accenture by their Leads within the confines of an established budget and guidelines over a defined period.</li><li>Used Angular framework and implemented knowledge of accessibility standards.</li><li>Worked with D3 library for graphs and Ag-grid to display employee data.</li></ul>",
        technologies: ['HTML | SCSS | Typescript | Angular']
      },
      {
        name: 'Total Rewards-TR',
        company: 'Accenture',
        timeSpan:'Nov. 2021 -Mar. 2022',
        description:  "<ul><li>It is a web application used by Talent Leads and Managers, to communicate and release Employee Performance and Compensation details. Employees will be able to view their history of Performance and Compensation details.</li><li>Used Angular framework and implemented accessibility standards.</li><li>Worked with D3 library to develop bar graphs.</li></ul>",
        technologies: ['HTML | SCSS | Typescript | Angular']
      },
      {
        name: 'Portfolio',
        company: 'Personal',
        timeSpan:'Aug. 2021 - Present',
        description: "<ul><li>Developed portfolio to display skills, experience by achieving responsiveness and used Animation on scroll (AOS lib).</li></ul>",
        technologies: ['HTML | SCSS | Typescript | Angular']
      },
    ];
    this.Experience=[
    {
      company: 'Accenture',
      position:'Appication development Analyst',
      timeSpan:'Aug. 2021 – Present',
      description: "<ul><li>3 years of hands-on experience, integrating and implementing design patterns using Angular framework and javascript libraries.</li><li>Specialized in crafting, customizing and optimizing user interface to align with business needs.</li><li>Engaged in Agile methodologies, participating in daily stand-ups, sprint planning, and retrospectives to ensure timely project delivery.</li><li>Lead a successful migration of an Angular version for large-scale application, significantly improving performance and maintainability.</li><li>Applied analytical skills to identify and rectify defects, employing a meticulous approach to troubleshooting and resolving issues while collaborating with cross-functional teams to implement effective fixes enhancing overall product performance.</li><li>Single-handedly implemented knowledge of accessibility standards like WCAG 2.1 and AAA using multiple tools and the implementation of accessible UI front end.</li><li>Ensure cross-browser compatibility and resolve issues related to front-end technologies.</li></ul>"
   },
   {
    company: 'Robu.in(Macfos pvt ltd)',
    position:'Intern',
    timeSpan:'June 2019 – Nov2019',
    description: "<ul><li>It works in the field of electronics, robotics, and automation.</li><li>Worked with a team to write programs for Arduino, learned to develop single-layer PCB with the Etching method, and double-layer PCB board designing using Proteus.</li><li>Later founded the “Innovation and development” cell in my college which was funded by Robu.in.</li></ul>"
 }
      


    ]
  }
}
