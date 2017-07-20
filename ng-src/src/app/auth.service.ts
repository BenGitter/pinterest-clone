import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  loggedIn:boolean = false;

  constructor(private http:Http) { }

  checkLogin(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get("/auth/status", {headers: headers})
      .map(res => res.json());
  }


  setLoggedIn(bool:boolean){
    this.loggedIn = bool;
    console.log("loggedIn:", this.loggedIn);
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logout(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get("/auth/logout", {headers: headers})
      .map(res => res.json());
  }

}
