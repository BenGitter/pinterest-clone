import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  @Input() pin;
  @Output() userClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  } 

  onUserClicked(){
    this.userClick.emit(this.pin.postedBy);
  }

}
