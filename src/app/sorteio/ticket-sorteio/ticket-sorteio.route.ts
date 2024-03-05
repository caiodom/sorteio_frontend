import { TicketSorteioComponent } from './ticket-sorteio.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarComponent } from './listar/listar.component';
import { TicketSorteioGuard } from './services/ticket-sorteio.service.guard';
import { NovoComponent } from './novo/novo.component';
import { TicketSorteioResolve } from './services/ticket-sorteio.resolve';


const ticketSorteioRouterConfig: Routes = [
  {
    path: '',
    component: TicketSorteioComponent,
    children: [
      {
        path: 'listar-todos',
        component: ListarComponent,
        canActivate: [TicketSorteioGuard],
        data: [{ claim: { name: 'TicketSorteio', value: 'Excluir' } }],
      },
      {
        path: 'adicionar-novo',
        component: NovoComponent,
        canDeactivate: [TicketSorteioGuard],
        canActivate: [TicketSorteioGuard],
        data: [{ claim: { name: 'TicketSorteio', value: 'Adicionar' } }],
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(ticketSorteioRouterConfig)],
  exports: [RouterModule],
})
export class TicketSorteioRoutingModule {}
