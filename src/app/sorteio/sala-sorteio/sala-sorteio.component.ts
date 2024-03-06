import { DadosSorteioService } from './../dados-sorteio/services/dados-sorteio.service';
import { SortearDialogService } from './services/sortear-dialog.service';
import { Component, OnInit } from '@angular/core';
import { SalaSorteioService } from './services/sala-sorteio.service';
import { SharedService } from 'src/app/utils/shared-variables';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { TicketSorteio } from '../ticket-sorteio/models/ticket-sorteio';
import { DadosSorteio } from '../dados-sorteio/models/dados-sorteio';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sala-sorteio',
  templateUrl: './sala-sorteio.component.html',
  styleUrls: ['./sala-sorteio.component.css'],
})
export class SalaSorteioComponent
  extends FormBaseGlobalComponent
  implements OnInit
{
  sorteado: boolean = false;
  errorMessage:string;
  dadosSorteio:DadosSorteio[];
  ticketSorteio:TicketSorteio;

  constructor(
    private dialogService: SortearDialogService,
    private service: SalaSorteioService,
    private sorteioService: DadosSorteioService,
    private toastr:ToastrService,
    protected override sharedService: SharedService
  ) {
    super(sharedService);
  }

  ngOnInit(): void {

    this.sorteioService.get(false)
                .subscribe({
                  next:success=>{this.dadosSorteio=success},
                  error:error=>{this.errorMessage}
                });
  }

  public openDialog() {
    this.dialogService
      .confirm('Sorteio', 'Sortear um participante!!',this.dadosSorteio,'lg')
      .then((modalData) =>this.sendSorteio(modalData))
      .catch(() => console.log('Erro ao obter o sorteio!'));
  }

  sendSorteio(data:any){

    console.log(data);

    this.service.post(data.idSorteio, true).subscribe({
      next: (sucesso) => this.processarSucesso(sucesso),
      error: (falha) => this.processarFalha(falha),
    })
  }

  processarSucesso(sucesso: any): void {
    this.sorteado=true;
    this.ticketSorteio=sucesso.data;
    this.toastr.success('Sorteio feito!', 'Sucesso!');
  }
  processarFalha(falha: any): void {
    this.sorteado=false;
    this.errors = falha.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }

  limpar(){
    this.ticketSorteio= new TicketSorteio();
    this.sorteado=false;
  }
}
