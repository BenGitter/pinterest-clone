import { PinService } from './../pin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  pins:Array<any> = [];

  constructor(private pinService:PinService) { }

  ngOnInit() {
    this.pinService.getAllPins().subscribe(data => {
      if(data.success){
        this.pins = data.pins;
      }
    })
  }

}
