import { PinService } from './pin.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  { path: "", component: OverviewComponent },
  { path: "add", component: AddComponent },
  { path: "**", component: OverviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    AuthService,
    PinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
