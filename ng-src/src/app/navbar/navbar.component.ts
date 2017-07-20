import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout().subscribe(data => {
      if(data.success){
        this.authService.setLoggedIn(false);
      }
    })
  }

}
