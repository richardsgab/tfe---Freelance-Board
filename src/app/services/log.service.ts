import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private _logList : Log[] = [
    // { logDate : any , logText : ""}
  ];

  constructor() { }
}

