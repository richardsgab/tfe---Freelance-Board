import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

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

  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.projectService.getP().subscribe(data => this.projectList = data);
  }

}
