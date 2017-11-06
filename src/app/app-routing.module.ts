import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./home-component/home.component";
import {LoginGuardService} from "./login-guard/login-guard.service";
import {AppComponent} from "./app.component";
import {ParentComponent} from "./parent-component/parent.component";
import {ChildOneComponent} from "./child-one-component/child-one.component";
import {ChildTwoComponent} from "./child-two-component/child-two.component";
import {LoginGuardChildService} from "./login-guard/login-guard-child.service";


const appRouting : Routes = [
  {
    path : 'home' ,
    component : HomeComponent,
    canActivate : [LoginGuardService]
  },
  {
    path : "parent",
    component : ParentComponent,
    canActivateChild : [LoginGuardChildService],
    children : [
      {path : 'child-one',component : ChildOneComponent},
      {path : "child-two", component : ChildTwoComponent}
    ]
  }
];

@NgModule({
  imports :[
    BrowserModule,
    RouterModule.forRoot(appRouting)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule{}
