import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private _logList : Log[] = [
    { logDate : new Date(1, 5, 2022) , logTxt : ""}
  ];

  constructor(private _http: HttpClient) { }

  addLog(log : Log) : any //Observable
  {
    return this._http.post<Log[]>('http://localhost:3000/logs', log);
  }

  getAll() : Log[]{
    return this._logList;
  }

  getLogs() {
    return this._http.get<Log[]>('http://localhost:3000/logs');
  }


  deleteLog(ind : number) : Log[]{
    this._logList.splice(ind, 1);
    return this._logList;
  }
}

