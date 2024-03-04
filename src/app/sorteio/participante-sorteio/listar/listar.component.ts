import { Component, OnInit } from '@angular/core';
import { ParticipanteSorteio } from '../models/participante-sorteio';
import { LocalStorageUtils } from 'src/app/utils/localstorage-utils';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { SharedService } from 'src/app/utils/shared-variables';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ParticipanteSorteioService } from '../services/participante-sorteio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent extends FormBaseGlobalComponent implements OnInit{


public participantesSorteio:ParticipanteSorteio[];
public localStorage=new LocalStorageUtils();
errorMessage:string

  constructor(private service:ParticipanteSorteioService,
              private confirmationDialogService: ConfirmationDialogService,
              private router: Router,
              private toastr:ToastrService,
              protected override sharedService: SharedService) {

    super(sharedService);
  }

  ngOnInit(): void {
    this.service.get(false)
                .subscribe({
                  next:success=>{this.participantesSorteio=success},
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

    this.toastr.success('Participante deletado com sucesso!', 'Sucesso!');

    this.ngOnInit();
  }

  processarFalhaDelete(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }


}
