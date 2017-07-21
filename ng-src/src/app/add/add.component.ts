import { Router } from '@angular/router';
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

  constructor(
    private pinService:PinService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddPin(){
    if(this.imageLink !== "" && this.description !== ""){
      this.pinService.addPin(this.imageLink, this.description).subscribe(data => {
        if(data.success){
          this.router.navigate(["/"]);
        }
      });
    }
  }

}
