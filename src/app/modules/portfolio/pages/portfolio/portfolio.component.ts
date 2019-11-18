import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {
  projects: Project[];
  test: boolean = false;

  constructor() { }

  ngOnInit() {
    // Not using a service for now
    this.projects = [
      {
        id: 1,
        title: 'Test',
        desc: 'Doing some testing',
        tech: 'Angular, HTML, CSS maybe',
        link: 'github.com/Bohlski/angular-portfolio' 
      },
      {
        id: 2,
        title: 'More testing',
        desc: 'Walla walla get dollar',
        tech: 'Angular, HTML, CSS maybe',
        link: 'github.com/Bohlski/angular-portfolio' 
      },
      {
        id: 3,
        title: 'Jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah',
        desc: 'Weeeewoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
        tech: 'Angular, HTML, CSS maybe',
        link: 'github.com/Bohlski/angular-portfolio' 
      },
      {
        id: 4,
        title: 'xd',
        desc: 'xd',
        tech: 'Angular, HTML, CSS maybe',
        link: 'github.com/Bohlski/angular-portfolio' 
      },
      {
        id: 5,
        title: 'Kappa',
        desc: 'Kapp',
        tech: 'Angular, HTML, CSS maybe',
        link: 'github.com/Bohlski/angular-portfolio' 
      },
    ]
  }

}
