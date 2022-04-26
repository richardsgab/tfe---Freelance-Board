import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _projectList = Project[] = [
    { name: "", createdAt: new Date(1, 5, 2022), client: "", location: ""}
  ];

  constructor(private _http: HttpClient) { }

  addP(P : Project[]) : any {
    return this._http.post<Project[]>('http://localhost:3000/logs', projects);
  }
}
