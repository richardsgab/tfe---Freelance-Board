import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  token! :string|null;

  decodedToken!: Token|null;

  isLogged!: boolean;

  constructor() 
  { 
    let token = localStorage.getItem('TOKEN');
    if(token) {
      this.save(token);
    }
  }

  save(token: string) {
    this.token = token;
    this.isLogged = true;
    this.decodedToken = jwtDecode(token);
    console.log(this.decodedToken);
    localStorage.setItem('TOKEN', token);
  }

  clear() {
    this.isLogged = false;
    this.token = null;
    localStorage.removeItem('TOKEN');
  }
}
