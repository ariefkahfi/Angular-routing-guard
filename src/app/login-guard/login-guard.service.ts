import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {LoginService} from "../login-service/login.service";


@Injectable()
export class LoginGuardService implements CanActivate{

  constructor(private loginService : LoginService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.loginService.logIn){
      return true;
    }else{
      window.alert('This is not logged in ');
      return false;
    }
  }

}
