import { ParticipanteSorteioComponent } from './participante-sorteio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipanteSorteioGuard } from './services/participante-sorteio.service.guard';
import { NovoComponent } from './novo/novo.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { ParticipanteSorteioResolve } from './services/participante-sorteio.resolve';
import { DetalhesComponent } from './detalhes/detalhes.component';

const participanteSorteioRouterConfig: Routes = [
  {
    path: '',
    component: ParticipanteSorteioComponent,
    children: [
      {
        path: 'listar-todos',
        component: ListarComponent,
        canActivate: [ParticipanteSorteioGuard],
        data: [{ claim: { name: 'ParticipanteSorteio', value: 'Excluir' } }],
      },
      {
        path: 'adicionar-novo',
        component: NovoComponent,
        canDeactivate: [ParticipanteSorteioGuard],
        canActivate: [ParticipanteSorteioGuard],
        data: [{ claim: { name: 'ParticipanteSorteio', value: 'Adicionar' } }],
      },
      {
        path: 'editar/:id',
        component: EditarComponent,
        canActivate: [ParticipanteSorteioGuard],
        data: [{ claim: { name: 'ParticipanteSorteio', value: 'Atualizar' } }],
        resolve: {
          participanteSorteio: ParticipanteSorteioResolve,
        },
      },
      {
        path: 'detalhes/:id',
        component: DetalhesComponent,
        resolve: {
          participanteSorteio: ParticipanteSorteioResolve,
        },
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(participanteSorteioRouterConfig)],
  exports: [RouterModule],
})
export class ParticipanteSorteioRoutingModule {}
