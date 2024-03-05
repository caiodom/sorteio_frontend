import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";

import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { HistoricoSorteio } from "../model/historico-sorteio";

@Injectable()
export class HistoricoSorteioService extends BaseService<HistoricoSorteio>{


  constructor(private http:HttpClient){
    super(http,"historico-sorteio",environment.api);
  }


}
