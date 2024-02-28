import { DadosSorteioService } from './dados-sorteio.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DadosSorteio } from "../models/dados-sorteio";
import { Observable } from 'rxjs';

@Injectable()
export class DadosSorteioResolve implements Resolve<DadosSorteio>{

  constructor(private service: DadosSorteioService){

  }

  resolve(route: ActivatedRouteSnapshot){
     return this.service.getById(route.params['id'],false);
  }

}
