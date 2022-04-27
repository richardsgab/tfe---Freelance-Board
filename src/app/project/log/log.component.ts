import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Log } from 'src/app/models/log';
import { LogService } from 'src/app/services/log.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logList : Log[] = [];
  logDate! : Date;
  logText! : string;
  addnewLogForm! : FormGroup;
  displayForm:boolean = false;
  id: number;
  logItem! : null;

  constructor(private logService : LogService,
               private _fb: FormBuilder, 
               private activedRoute: ActivatedRoute) { 
    this.id = activedRoute.parent?.snapshot.params['id']; // get id of route --- ahora el id esta en la route(url) 
  }

  ngOnInit(): void {  
    this.addnewLogForm = this._fb.group({
      logDate:[null,[Validators.required]],
      logTxt:[null,[Validators.required]],
    });

    this.logService.getLogs(this.id).subscribe(data => this.logList = data);
  }

  addNewLog(){ //add new log to db and to list to show it
    this.logService.addLog({ ...this.addnewLogForm.value, projectId: this.id }).subscribe(() => {
      this.logService.getLogs(this.id).subscribe(data => this.logList = data);
    });
  }

  toggleForm() {
    this.displayForm = !this.displayForm;
  }
  
  updateLog(){
    this.displayForm = true;   
  }  

  deleteLog(): void{
    this.logList.splice(this.id);    
  }

  
}  
  
  
