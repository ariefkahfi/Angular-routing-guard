import {Injectable} from "@angular/core";


@Injectable()
export class LoginService{
  private isLogged  : boolean;


  set logIn(logIn : boolean){
    this.isLogged =logIn;
  }

  get logIn(){
    return this.isLogged;
  }

}
