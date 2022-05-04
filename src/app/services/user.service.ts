import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userList : User[] = [];
  private _APIUsers : string = 'http://localhost:3000/users';

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<User[]>('http://localhost:3000/users');
  }

  add(user: User) : Observable<User>{   
   return this._http.post<User>(this._APIUsers, user);
  }
}
