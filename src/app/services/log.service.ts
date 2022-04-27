import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private _logList : Log[] = [
    { logDate : new Date(1, 5, 2022) , logTxt : "", id: 0}
  ];

  constructor(private _http: HttpClient) { }

  addLog(log : Log) : any //Observable
  {
    return this._http.post<Log[]>('http://localhost:3000/logs', log);
  }

  getAll() : Log[]{
    return this._logList;
  }

  getLogs(p_id: number) {
    return this._http.get<Log[]>('http://localhost:3000/logs?projectId=' + p_id);
  }


}


