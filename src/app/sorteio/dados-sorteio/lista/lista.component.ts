import { Component, OnInit } from '@angular/core';
import { DadosSorteio } from '../models/dados-sorteio';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { SharedService } from 'src/app/utils/shared-variables';
import { LocalStorageUtils } from 'src/app/utils/localstorage-utils';
import { DadosSorteioService } from '../services/dados-sorteio.service';
import { CurrencyUtils } from 'src/app/utils/currency-utils';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent extends FormBaseGlobalComponent implements OnInit {

  public dadosSorteio: DadosSorteio[];
  public localStorage=new LocalStorageUtils();
  errorMessage:string

  constructor(private service:DadosSorteioService,
              protected override sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit(): void {

    this.service.get(false)
                .subscribe({
                  next:success=>{this.dadosSorteio=success},
                  error:error=>{this.errorMessage}
                });

  }


  DecimalParaString(valor:any){

    return CurrencyUtils.DecimalParaString(valor);
  }

}
