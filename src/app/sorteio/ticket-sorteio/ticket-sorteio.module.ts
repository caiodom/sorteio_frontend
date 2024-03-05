import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketSorteioComponent } from './ticket-sorteio.component';
import { NovoComponent } from './novo/novo.component';
import { ListarComponent } from './listar/listar.component';
import { TicketSorteioRoutingModule } from './ticket-sorteio.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketSorteioService } from './services/ticket-sorteio.service';
import { TicketSorteioResolve } from './services/ticket-sorteio.resolve';
import { TicketSorteioGuard } from './services/ticket-sorteio.service.guard';
import { ParticipanteSorteioService } from '../participante-sorteio/services/participante-sorteio.service';
import { DadosSorteioService } from '../dados-sorteio/services/dados-sorteio.service';



@NgModule({
  declarations: [
    TicketSorteioComponent,
    NovoComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    TicketSorteioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    TicketSorteioService,
    TicketSorteioResolve,
    TicketSorteioGuard,
    ParticipanteSorteioService,
    DadosSorteioService
  ]
})
export class TicketSorteioModule { }
