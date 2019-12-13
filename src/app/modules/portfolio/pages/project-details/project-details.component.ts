import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/interfaces';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styles: []
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) { }

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    // Come to think of it, I'm pretty sure there's no reason to use all observables and all this.
    // At least right now you have no plan of having events that alter the projects, so subscribing to an observable is a bit much.
    // Will just leave it in for future reference..
    this.projectsService.getProject(id).subscribe((project: Project) => this.project = project);
  }
}
