import { Component, OnInit } from '@angular/core';
import { HistoricoSorteioService } from '../services/historico-sorteio.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/utils/shared-variables';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { HistoricoSorteio } from '../model/historico-sorteio';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent extends FormBaseGlobalComponent implements OnInit {


  historicosSorteio:HistoricoSorteio[];
  errorMessage:string


  constructor(
    private service: HistoricoSorteioService,
    private toastr: ToastrService,
    protected override sharedService: SharedService) {

      super(sharedService);


  }

  ngOnInit(): void {

    this.service.get(false)
                .subscribe({
                  next:success=>{this.historicosSorteio=success},
                  error:error=>{this.errorMessage}
                });

  }
}
