import { PinService } from './../pin.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as Shuffle from 'shufflejs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @ViewChild("grid") grid;

  pins:Array<any> = [];
  shuffle;
  filter:string = "";

  constructor(
    private pinService:PinService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get pins
    this.pinService.getAllPins().subscribe(data => {
      if(data.success){
        this.pins = data.pins;
      }
    });

    // Inelegant solution to avoid adding all pins once loaded
    let x = setInterval(() => {
      if(this.pins.length > 0){
        this.shuffle = new Shuffle(this.grid.nativeElement, {
          itemSelector: ".pin",
          delimeter: ","
        });

        // Subscribe to params
        this.route.params.subscribe(params => {
          this.filterByUser(params["name"]);
        });

        clearInterval(x);
      }
    }, 10);

    // Subscribe to navbar emitted event
    this.pinService.filterPinsEvent.subscribe((user:string) => {
      this.filterByUser(user);
    })
  }

  filterByUser(user?:string){
    this.filter = user ? "/ " + user : "";
    this.shuffle.filter(user);
  }

}
