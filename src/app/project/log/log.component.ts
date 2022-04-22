import { Component, OnInit } from '@angular/core';
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

  constructor(private _logService : LogService) { }

  ngOnInit(): void {
  }

}


