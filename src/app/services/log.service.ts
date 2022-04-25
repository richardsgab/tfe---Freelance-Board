import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private _logList : Log[] = [
    { logDate : new Date(1, 5, 2022) , logTxt : ""}
  ];

  constructor() { }

  getAll() : Log[]{
    return this._logList;
  }

  //delete()......how?
}

