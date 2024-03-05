import { BaseService } from "src/app/services/base.service";

import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { TicketSorteio } from "../../ticket-sorteio/models/ticket-sorteio";
import { BaseHeaderService } from "src/app/services/base.header.service";
import { Observable, catchError, map } from "rxjs";


@Injectable()
export class SalaSorteioService extends BaseHeaderService{

  constructor(private http: HttpClient){

    super();

  }


  post(hasAuth: boolean): Observable<TicketSorteio> {
    var object = {}

    return this.http
      .post(environment.api + 'sorteio/sortear', object, this.resolveHeader(hasAuth))
      .pipe(map(this.extractBase), catchError(this.serviceError));

  }

}
