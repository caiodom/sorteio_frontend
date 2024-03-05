import { Injectable } from "@angular/core";
import { NovoComponent } from "../novo/novo.component";
import { BaseGuard } from "src/app/services/base.guard";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from "@angular/router";

@Injectable()
export class TicketSorteioGuard extends BaseGuard implements CanActivate,CanDeactivate<NovoComponent>{

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
