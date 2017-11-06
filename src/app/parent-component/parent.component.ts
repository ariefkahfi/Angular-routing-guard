import {Component} from "@angular/core";
import {LoginService} from "../login-service/login.service";

@Component({
  styles : [`
    /*init container*/
    #left-container a {
      display : block;
      color : white;
      text-decoration : none;
      margin-top : 5px;
      margin-left : 5px;
      margin-bottom : 10px;
    }
    #left-container {
      background-color:  dodgerblue;
      float : left;
      width: 25%;
      margin-right: 10px;
    }
    #right-container {
      background-color : crimson;
      overflow: hidden;
      margin-right: 5px;
      padding : 1%;
    }
    *{
      box-sizing: border-box;
    }
  `],
  template : `
    <div id="left-container">
      <a routerLink="child-one" routerLinkActive="active">Child One</a>
      <a routerLink="child-two" routerLinkActive="active">Child Two</a>
    </div>
    
    <div id="right-container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class ParentComponent{


  constructor(public loginService : LoginService){}

}
