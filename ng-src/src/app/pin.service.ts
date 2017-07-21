import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class PinService {

  filterPinsEvent:Subject<string> = new Subject();
  removePinEvent:Subject<string> = new Subject();
  overviewReady = false;

  pins:Array<any> = [];

  constructor(
    private http:Http,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    this.filterPinsEvent.subscribe(data => {
      if(this.router.url === "/add"){
        this.overviewReady = false;
        this.router.navigate(["/"]);
        
        let x = setInterval(() => {
          if(this.overviewReady){
            this.filterPinsEvent.next(data);

            clearInterval(x);
          }
        }, 10);
      }
    });
  }

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

  removePin(pin:any){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.delete("/api/pin/"+pin._id, {headers: headers})
      .map(res => res.json());
  }

}
