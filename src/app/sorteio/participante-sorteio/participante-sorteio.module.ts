import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipanteSorteioComponent } from './participante-sorteio.component';
import { NovoComponent } from './novo/novo.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { DeleteComponent } from './delete/delete.component';
import { ParticipanteSorteioRoutingModule } from './participante-sorteio.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticipanteSorteioService } from './services/participante-sorteio.service';
import { ParticipanteSorteioResolve } from './services/participante-sorteio.resolve';
import { ParticipanteSorteioGuard } from './services/participante-sorteio.service.guard';



@NgModule({
  declarations: [
    ParticipanteSorteioComponent,
    NovoComponent,
    EditarComponent,
    ListarComponent,
    DetalhesComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ParticipanteSorteioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    ParticipanteSorteioService,
    ParticipanteSorteioResolve,
    ParticipanteSorteioGuard
  ]
})
export class ParticipanteSorteioModule { }
