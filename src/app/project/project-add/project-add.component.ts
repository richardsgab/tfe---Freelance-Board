import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  addForm!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this._fb.group({
      name: [null,],
      location : [null, ],
      client : [null],
      description: [null],
      
      reglements: [null],
      contextualDocs: [null],
      collaborators: [null],
      logNotes: [null],
      autorisationDossier: [null],

      plansOriginals: [null],
      plansAutoCad: [null],
      plansRhino: [null],

      imgClient: [null],
      imgPhotos: [null],
      imgInspiration: [null]    
    })
  }

}
