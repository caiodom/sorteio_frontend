import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { RegisterComponent } from "../register/register.component";
import { Observable } from "rxjs";
import { LocalStorageUtils } from "src/app/utils/localstorage-utils";

@Injectable()
export class SigninGuard implements CanDeactivate<RegisterComponent>,CanActivate{


  localStorageUtils=new LocalStorageUtils();

  constructor(private router:Router){}

  canActivate() {

    /*if(this.localStorageUtils.obterTokenUsuario()){
      this.router.navigate(['signin']);
    }*/

    return true;
  }



  canDeactivate(component:RegisterComponent){

    if(component.mudancasNaoSalvas){
      return window.confirm('Você tem certeza que deseja abandonar as mudanças não salvas?')
    }

    return true;
  }




}
