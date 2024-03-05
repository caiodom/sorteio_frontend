import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { TicketSorteio } from "../models/ticket-sorteio";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError } from "rxjs";

@Injectable()
export class TicketSorteioService extends BaseService<TicketSorteio>{


  constructor(private http:HttpClient){
    super(http,"ticket-sorteio",environment.api);
  }

  listarTicketCompleto(hasAuth: boolean): Observable<TicketSorteio[]> {

   return this._http
      .get<TicketSorteio[]>(this._gateway + this._route+"/ListarTicketsCompletos", this.resolveHeader(hasAuth))
      .pipe(catchError(this.serviceError));
  }

}
