import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { TicketSorteio } from "../models/ticket-sorteio";
import { TicketSorteioService } from "./ticket-sorteio.service";

@Injectable()
export class TicketSorteioResolve implements Resolve<TicketSorteio>{

  constructor(private service: TicketSorteioService){

  }

  resolve(route: ActivatedRouteSnapshot){
     return this.service.getById(route.params['id'],false);
  }

}
