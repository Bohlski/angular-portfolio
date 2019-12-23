import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    // Not using a service for now
    this.projectsService.getProjects().subscribe((projects: Project[]) => this.projects = projects);
  }

}
