import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Clients } from 'src/app/models/clients';
import { Project } from 'src/app/models/project';
import { ClientService } from 'src/app/services/client.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  addForm!: FormGroup;
  // projects : Project[] = [];
  projectList : Project[] = [];
  clientsList : Clients[] = [];

  constructor(
    private _fb: FormBuilder,
     private clientService: ClientService, 
     private projectService: ProjectService,
     private router: Router,
  ) { }

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

      console.log(projctadd);
      
      this.projectService.addP(projctadd).subscribe(() => {        
        this.addForm.reset();        
        this.router.navigateByUrl('/Project/update/0')
      })
    }else {
      console.log("🤢");
      this.addForm.markAllAsTouched();
    }
  }  

//transforme le fichier en binary
  fileChanged(event: any, name: string) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = e => {
      this.addForm.get(name)?.setValue(e.target?.result);
    }
  }

}
