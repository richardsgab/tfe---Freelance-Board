import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
  
  projects : Project[] = [];
  pname! : string;

  constructor() { }

  ngOnInit(): void {
  }

  // showName(){
  //   this.pname = this.projects.
  // }

}
