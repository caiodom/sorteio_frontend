import { Component, OnInit } from '@angular/core';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { TicketSorteioService } from '../services/ticket-sorteio.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/utils/shared-variables';
import { TicketSorteio } from '../models/ticket-sorteio';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent extends FormBaseGlobalComponent implements OnInit {


ticketsSorteio:TicketSorteio[];
errorMessage:string


  constructor(private service:TicketSorteioService,
              private confirmationDialogService: ConfirmationDialogService,
              private router: Router,
              private toastr:ToastrService,
              protected override sharedService: SharedService) {

                super(sharedService);
               }

  ngOnInit(): void {

    this.service.listarTicketCompleto(false)
    .subscribe({
      next:success=>{this.ticketsSorteio=success},
      error:error=>{this.errorMessage}
    });

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

    this.toastr.success('Ticket deletado com sucesso!', 'Sucesso!');

    this.ngOnInit();
  }

  processarFalhaDelete(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }


}
