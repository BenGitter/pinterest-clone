import { PinService } from './../pin.service';
import { Component, ViewChild, OnInit } from '@angular/core';

import * as Shuffle from 'shufflejs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @ViewChild("grid") grid;

  shuffle;
  filter:string = "";

  constructor(
    public pinService:PinService
  ) { }

  ngOnInit() {
    // Get pins
    this.pinService.getAllPins().subscribe(data => {
      if(data.success){
        this.pinService.pins = data.pins;
      }
    });

    // Inelegant solution to avoid adding all pins once loaded
    let x = setInterval(() => {
      if(this.pinService.pins.length > 0){
        this.shuffle = new Shuffle(this.grid.nativeElement, {
          itemSelector: ".pin",
          delimeter: ","
        });

        this.pinService.overviewReady = true;

        // Subscribe to navbar emitted event
        this.pinService.filterPinsEvent.subscribe((user:string) => {
          this.filterByUser(user);
        });

        // Subscribe to delete pin event
        this.pinService.removePinEvent.subscribe((id:string) => {
          const el = document.getElementById(id);
          this.shuffle.remove([el]);
        });

        clearInterval(x);
      }
    }, 10);

    
  }

  filterByUser(user?:string){
    this.filter = user ? "/ " + user : "";
    this.shuffle.filter(user);
  }

}
