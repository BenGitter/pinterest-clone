import { PinService } from './../pin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  imageLink:string = "";
  description:string = "";

  constructor(private pinService:PinService) { }

  ngOnInit() {
  }

  onAddPin(){
    if(this.imageLink !== "" && this.description !== ""){
      this.pinService.addPin(this.imageLink, this.description).subscribe(data => {
        console.log(data);
      });
    }
  }

}
