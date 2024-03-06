import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { BaseGuard } from "src/app/services/base.guard";


@Injectable()
export class SalaSorteioGuard extends BaseGuard implements CanActivate{

  constructor(protected override router: Router){
    super(router);
  }

  canActivate(route: ActivatedRouteSnapshot){
    return super.claimsValidator(route)
  }

}
