import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clients } from 'src/app/models/clients';
import { Project } from 'src/app/models/project';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  addForm!: FormGroup;
  projects : Project[] = [];
  clientsList : Clients[] = [];

  constructor(private _fb: FormBuilder, private clientService: ClientService) { }

  refreshClients() {
    this.clientService.getClients().subscribe(data => this.clientsList = data);
  }

  ngOnInit(): void {

    this.refreshClients();

    this.addForm = this._fb.group({
      name: [null, [Validators.required]],
      location : [null, ],
      client : [null, [Validators.required]],
      createdAt : [null, [Validators.required]],
      description: [null],
      
      reglements: [null],
      cadastre: [null],
      contextDocs: [null],
      collaborators: [null],
      logNotes: [null],
      autorisationDossier: [null],

      plansOriginals: [null],
      plansAutoCad: [null],
      plansRhino: [null],
      plansPDF: [null],

      imgClient: [null],
      imgClientIdeas: [null],
      imgPhotos: [null],
      imgInspiration: [null]    
    })
  }

  addProject(){
    if(this.addForm.valid){
      console.log("🙌");
      let projctadd : Project = {...this.addForm.value};
      this.projects.push(projctadd);
      this.addForm.reset();
    }else {
      console.log("🤢");
      this.addForm.markAllAsTouched();
    }
  }

}
