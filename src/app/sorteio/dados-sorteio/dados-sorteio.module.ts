import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosSorteioComponent } from './dados-sorteio.component';
import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { DadosSorteioRoutingModule } from './dados-sorteio.route';
import { DadosSorteioService } from './services/dados-sorteio.service';
import { DadosSorteioResolve } from './services/dados-sorteio.resolve';
import { DadosSorteioGuard } from './services/dados-sorteio.service.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DadosSorteioComponent,
    NovoComponent,
    ListaComponent,
    EditarComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    DadosSorteioRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers:[
    DadosSorteioService,
    DadosSorteioResolve,
    DadosSorteioGuard
  ],
})
export class DadosSorteioModule { }
