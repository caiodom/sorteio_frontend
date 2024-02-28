import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { BaseGuard } from "src/app/services/base.guard";
import { NovoComponent } from "../novo/novo.component";
import { Observable } from "rxjs";

@Injectable()
export class DadosSorteioGuard extends BaseGuard implements CanActivate,CanDeactivate<NovoComponent>{

  constructor(protected override router: Router){
    super(router);
  }

  canActivate(route: ActivatedRouteSnapshot){
    return super.claimsValidator(route)
  }

  canDeactivate(component: NovoComponent){
    if(component.mudancasNaoSalvas){
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?')
    }
    return true;
  }




}
