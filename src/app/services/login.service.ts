import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }

  public login(form: Login) : Observable<Auth> {
    return this._http.post<Auth>('http://localhost:8000/api/login_check', form);
  }
}

