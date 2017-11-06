import { Component } from '@angular/core';
import {LoginService} from "./login-service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template : `
    <div>
      
      <div>
        <label for="username">Username</label>
        <input type="text" [(ngModel)] = "username" placeholder="Username" id="username"/>
      </div>
      
      <div>
        <button (click)="doLogin()">Log in</button>
        <button (click)="testRouter()">Test Router</button>
        <a routerLink="parent">Parent</a>
      </div>
      
    </div>
    
    <router-outlet></router-outlet>
    
    
  `
})
export class AppComponent {

  constructor(private loginService : LoginService , private router : Router){

  }

  doLogin() : void {
    this.loginService.logIn = true;
  }

  testRouter() {
    this.loginService.logIn = true;
    this.router.navigate(['home']);
  }
}
