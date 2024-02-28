import { BaseService } from "src/app/services/base.service";
import { DadosSorteio } from "../models/dados-sorteio";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class DadosSorteioService extends BaseService<DadosSorteio>{

  constructor(private http:HttpClient){
    super(http,"dados-sorteio",environment.api);
  }

}
