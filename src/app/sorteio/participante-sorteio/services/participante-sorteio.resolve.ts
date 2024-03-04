import { ParticipanteSorteioService } from './participante-sorteio.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ParticipanteSorteio } from "../models/participante-sorteio";
import { Observable } from 'rxjs';

@Injectable()
export class ParticipanteSorteioResolve implements Resolve<ParticipanteSorteio>{

  constructor(private service: ParticipanteSorteioService){

  }

  resolve(route: ActivatedRouteSnapshot){
     return this.service.getById(route.params['id'],false);
  }

}
