import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Log } from 'src/app/models/log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-newlog',
  templateUrl: './newlog.component.html',
  styleUrls: ['./newlog.component.css']
})
export class NewlogComponent implements OnInit {

  addnewLogForm! : FormGroup;
  logs : Log[] = [];
  // loglist : logList[]

  constructor(private _fb: FormBuilder, private logservice : LogService) { }

  ngOnInit(): void {
    this.addnewLogForm = this._fb.group({
      logDate:[null,[Validators.required]],
      logTxt:[null,[Validators.required]],
    });
  }

  addNewLog(){
    
  }

}
