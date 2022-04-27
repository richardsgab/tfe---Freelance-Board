import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
  
  project! : Project;
  pname! : string;

  id:number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
  ) { 
    this.id = activatedRoute.snapshot.params['id'];
    console.log(this.id);
    
  }

  ngOnInit(): void {
    if(this.id == 0) {
      this.projectService.getLastProject().subscribe(data => this.project = data[0]);
    }
    else {
      this.projectService.getProject(this.id).subscribe(data => this.project = data);
    }
  }

  // showName(){
  //   this.pname = this.projects.
  // }

}
