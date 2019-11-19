import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styles: []
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // let id: number = parseInt(this.route.snapshot.paramMap.get('id'));  -- Maybe for later use with services
    // Use id to get project data
  }

}
