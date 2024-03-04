import { BaseService } from "src/app/services/base.service";
import { ParticipanteSorteio } from "../models/participante-sorteio";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { CepConsulta } from "../models/cep-consulta";
import { Observable, catchError } from "rxjs";


@Injectable()
export class ParticipanteSorteioService extends BaseService<ParticipanteSorteio>{

  constructor(private http:HttpClient){
    super(http,"participante-sorteio",environment.api);
  }

  consultarCep(cep: string): Observable<CepConsulta> {
    return this.http
        .get<CepConsulta>(`https://viacep.com.br/ws/${cep}/json/`)
        .pipe(catchError(super.serviceError))
}

}
