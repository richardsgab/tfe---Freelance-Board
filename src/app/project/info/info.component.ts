import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  id: number;
  project! : Project;
  fg!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService, fb: FormBuilder) { 
    this.id = activatedRoute.parent?.snapshot.params['id'];
    this.fg = fb.group({ //va chercher les data du project
      'name': [null, Validators.required],      
      'location' : [null, ],
      'client' : [null, [Validators.required]],
      'createdAt' : [null, [Validators.required]],
      'description': [null]
    })
  }

  ngOnInit(): void {//recupere les data du project
    this.projectService.getProject(this.id).subscribe(data => {
      this.project = data;
      this.fg.patchValue(data);
    })
  }

}
