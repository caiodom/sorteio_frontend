import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipanteSorteioComponent } from './participante-sorteio.component';
import { NovoComponent } from './novo/novo.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { DeleteComponent } from './delete/delete.component';



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
    CommonModule
  ]
})
export class ParticipanteSorteioModule { }
