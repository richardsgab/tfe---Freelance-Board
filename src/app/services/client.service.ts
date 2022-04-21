import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../models/clients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // private _clientsList : Clients[] = [];
  private _APIClients : string = 'http://localhost:3000/clients';

  constructor(private _http: HttpClient) { }

  getClients() {
    return this._http.get<Clients[]>('http://localhost:3000/clients');
  }

  add(client: Clients) : Observable<Clients>{   
   return this._http.post<Clients>(this._APIClients, client);
  }
}
