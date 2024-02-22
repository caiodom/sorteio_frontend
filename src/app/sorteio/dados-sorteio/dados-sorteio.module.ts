import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosSorteioComponent } from './dados-sorteio.component';
import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    DadosSorteioComponent,
    NovoComponent,
    ListaComponent,
    EditarComponent,
    DetalhesComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DadosSorteioModule { }
