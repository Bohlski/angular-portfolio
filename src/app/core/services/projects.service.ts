import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Project } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  baseUrl: string = 'assets/'

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + 'projects.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  getProject(id: number) {
    return this.http.get<Project[]>(this.baseUrl + 'projects.json')
      .pipe(
        map(projects => {
          let project = projects.filter((proj: Project) => proj.id === id);
          return (project && project.length) ? project[0] : null;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
