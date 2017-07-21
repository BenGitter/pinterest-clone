import { PinService } from './pin.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { AddComponent } from './add/add.component';
import { PinComponent } from './pin/pin.component';

const appRoutes: Routes = [
  { path: "", component: OverviewComponent },
  { path: "add", component: AddComponent },
  { path: ":name", component: OverviewComponent },
  { path: "**", component: OverviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    AddComponent,
    PinComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MasonryModule
  ],
  providers: [
    AuthService,
    PinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
