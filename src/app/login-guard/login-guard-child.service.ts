import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {LoginService} from "../login-service/login.service";

@Injectable()
export class LoginGuardChildService implements CanActivateChild{


  constructor(private loginService : LoginService){}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.loginService.logIn){
      return true;
    }else{
      window.alert('you cannot access this child routes');
      return false;
    }

  }

}
