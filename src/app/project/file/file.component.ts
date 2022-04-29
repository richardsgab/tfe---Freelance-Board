import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileModel } from 'src/app/models/file';
import { Project } from 'src/app/models/project';
import { FileService } from 'src/app/services/file.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  addForm!: FormGroup;
  addFile! : FormGroup;
  fileList: FileModel[] = [];
  logList: any;
  id!: number;
  displayFiles:boolean = false;
  project! : Project;
  pname! : string;

  constructor(
    private projectService: ProjectService,
    private FileService: FileService,
    private router: Router, 
    private _fb: FormBuilder,
    private activedRoute: ActivatedRoute)
     {       
       this.id = activedRoute.parent?.snapshot.params['id'];
      }  

  ngOnInit(): void {
    this.addFile = this._fb.group({
      id :[0],
      name : [null],
      category : [],
      projectId : [null],
      file : [null]
    });

    this.FileService.getFiles(this.id).subscribe(data => this.fileList = data);
  }
  
  addNewFile(){
    console.log(this.addFile.value);
    
    this.FileService.addFile({ ...this.addFile.value, projectId : this.id}).subscribe(() => {
      this.FileService.getFiles(this.id).subscribe(data => this.fileList = data);
      this.addFile.reset();
    });
  }

  deleteFile(id: number){
    this.FileService.delFile(id).subscribe(() => {
      this.FileService.getFiles(this.id).subscribe(data => this.fileList = data);
    })
  }

  toggleForm() {
    this.displayFiles = !this.displayFiles;
  }

  //transforme le fichier en binary
  fileChanged(event: any) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = e => {
      this.addFile.get('file')?.setValue(e.target?.result);
    }
  }

}

