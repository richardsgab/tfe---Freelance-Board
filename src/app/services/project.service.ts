import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _projectList: Project[] = [];

  constructor(private _http: HttpClient) {
    // this._projectList = 
   }

  addP(p : Project) : any {
    return this._http.post<Project[]>('http://localhost:3000/Projects', p);
  }
  getAllP(): Project[]{
   return this._projectList;
  }
  getP() {
    return this._http.get<Project[]>('http://localhost:3000/projects');
  }

  getProject(id: number) {
    return this._http.get<Project>('http://localhost:3000/projects/' + id);
  }

  getLastProject() {
    return this._http.get<Project[]>('http://localhost:3000/projects/?_sort=id&_limit=1&_order=desc');
  }
}
