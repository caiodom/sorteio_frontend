import { Component, OnInit } from '@angular/core';
import { DadosSorteio } from '../models/dados-sorteio';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { SharedService } from 'src/app/utils/shared-variables';
import { LocalStorageUtils } from 'src/app/utils/localstorage-utils';
import { DadosSorteioService } from '../services/dados-sorteio.service';
import { CurrencyUtils } from 'src/app/utils/currency-utils';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent extends FormBaseGlobalComponent implements OnInit {

  public dadosSorteio: DadosSorteio[];
  public localStorage=new LocalStorageUtils();
  errorMessage:string;

  constructor(private service:DadosSorteioService,
              private confirmationDialogService: ConfirmationDialogService,
              private router: Router,
              private toastr:ToastrService,
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

  public openDeleteDialog(id:any) {
    this.confirmationDialogService.confirm('Deletar', 'Você realmente deseja deletar esse dado?')
    .then((confirmed) => this.service.delete(id,true).subscribe({
      next:sucesso=>this.processarSucessoDelete(sucesso),
      error:falha=>this.processarFalhaDelete(falha)
    }))
    .catch(() => console.log('Dado não deletado'));
  }

  processarSucessoDelete(response: any) {

    this.toastr.success('Sorteio deletado com sucesso!', 'Sucesso!');

    this.ngOnInit();


  }

  processarFalhaDelete(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }

}
