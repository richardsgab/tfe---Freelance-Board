import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Log } from 'src/app/models/log';
import { LogService } from 'src/app/services/log.service';

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
  

  constructor(private logService : LogService, private _fb: FormBuilder) { }

  ngOnInit(): void {  
    this.addnewLogForm = this._fb.group({
      logDate:[null,[Validators.required]],
      logTxt:[null,[Validators.required]],
    });

    this.logService.getLogs().subscribe(data => this.logList = data);
  }

  addNewLog(){ //add new log to db and to list to show it
    this.logService.addLog(this.addnewLogForm.value).subscribe(() => {
      this.logService.getLogs().subscribe(data => this.logList = data);
    });
  }

  toggleForm() {
    this.displayForm = !this.displayForm;
  }

  //actions pour modifier et pour supprimer un Log:
  updateLog(){
    this.displayForm = true;
    // this.toggleForm();// no funciona
  }

  deleteLog(ind : number){
    this.logList = this.logService.deleteLog(ind);
  }



}


