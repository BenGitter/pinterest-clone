import { PinService } from './../pin.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService:AuthService,
    public pinService:PinService
  ) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout().subscribe(data => {
      if(data.success){
        this.authService.setLoggedIn(false);
      }
    });
  }

  onFilter(){
    this.pinService.filterPinsEvent.next(this.authService.name);
  }

}
