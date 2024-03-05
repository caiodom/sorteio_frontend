import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoSorteioComponent } from './historico-sorteio.component';
import { ListarComponent } from './listar/listar.component';
import { HistoricoSorteioRoutingModule } from './historico-sorteio.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricoSorteioService } from './services/historico-sorteio.service';



@NgModule({
  declarations: [
    HistoricoSorteioComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    HistoricoSorteioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    HistoricoSorteioService
  ]
})
export class HistoricoSorteioModule { }
