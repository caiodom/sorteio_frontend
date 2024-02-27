import { Base } from './../../../models/base';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { BaseGuard } from "src/app/services/base.guard";

@Injectable()
export class HomeGuard extends BaseGuard implements CanActivate{

  constructor(protected override router: Router){
    super(router);
  }

  canActivate(){

     /*if(!this.localStorageUtils.obterTokenUsuario()){
            this.router.navigate(['/signin/login/'], { queryParams: { returnUrl: this.router.url }});
        }*/

        return true;
  }


}
