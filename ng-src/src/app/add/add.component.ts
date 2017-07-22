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
  imageLinkChecked:string = "http://www.ohgizmo.com/wp-content/uploads/2008/03/broken_image_necklace.jpg";
  description:string = "";

  constructor(
    private pinService:PinService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddPin(){
    if(this.imageLink !== "" && this.description !== ""){
      this.pinService.addPin(this.imageLinkChecked, this.description).subscribe(data => {
        if(data.success){
          this.router.navigate(["/"]);
        }
      });
    }
  }

  onChange(){
    this.imageExists(this.imageLink, (exists) => {
      if(exists){
        this.imageLinkChecked = this.imageLink;
      }else{
        this.imageLinkChecked = "http://www.ohgizmo.com/wp-content/uploads/2008/03/broken_image_necklace.jpg";
      }
    });
  }

  imageExists(url, callback){
    let img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;
  }

}
