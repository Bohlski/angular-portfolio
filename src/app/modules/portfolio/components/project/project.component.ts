import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  imgFolder: string = "../../../../../assets/images/";

  constructor() { }

  ngOnInit() {
  }

}
