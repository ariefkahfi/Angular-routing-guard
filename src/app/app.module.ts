import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home-component/home.component";
import {LoginService} from "./login-service/login.service";
import {LoginGuardService} from "./login-guard/login-guard.service";
import {FormsModule} from "@angular/forms";
import {ChildOneComponent} from "./child-one-component/child-one.component";
import {ChildTwoComponent} from "./child-two-component/child-two.component";
import {ParentComponent} from "./parent-component/parent.component";
import {LoginGuardChildService} from "./login-guard/login-guard-child.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService , LoginGuardService , LoginGuardChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
