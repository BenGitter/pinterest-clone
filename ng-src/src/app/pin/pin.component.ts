import { AuthService } from './../auth.service';
import { PinService } from './../pin.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  @Input() pin;
  @Output() userClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private pinService:PinService,
    public authService:AuthService
  ) { }

  ngOnInit() {
  } 

  onUserClicked(){
    this.userClick.emit(this.pin.postedBy);
  }

  onRemovePin(){
    this.pinService.removePin(this.pin).subscribe(data => {
      if(data.success){
        this.pinService.removePinEvent.next(this.pin._id);
      }
    });
  
  }

}
