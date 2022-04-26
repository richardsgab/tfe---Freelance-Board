import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css']
})
export class ShowProjectsComponent implements OnInit {

  projectList : Project[] = [];
  name! : string;
  createdAt!: Date;
  client! : string;

  constructor() { }

  ngOnInit(): void {
   
  }

}
