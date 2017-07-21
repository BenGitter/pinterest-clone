import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class PinService {

  filterPinsEvent:Subject<string> = new Subject();

  constructor(private http:Http) { }

  getAllPins(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get("/api/pins", {headers: headers})
      .map(res => res.json());
  }

  addPin(imageLink:string, description:string){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {
      imageLink: imageLink,
      description: description
    }

    return this.http.post("/api/pin", body, {headers: headers})
      .map(res => res.json());
  }

}
