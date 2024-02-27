import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SorteioComponent } from "./sorteio.component";

const routes: Routes = [
{
  path:'',
  component:SorteioComponent
},
{
  path:'dados-sorteio',
  loadChildren: ()=>import('./dados-sorteio/dados-sorteio.module')
        .then(m=>m.DadosSorteioModule)
},
{
  path:'historico-sorteio',
  loadChildren: ()=>import('./historico-sorteio/historico-sorteio.module')
        .then(m=>m.HistoricoSorteioModule)
},
{
  path:'participante-sorteio',
  loadChildren: ()=> import('./participante-sorteio/participante-sorteio.module')
        .then(m=>m.ParticipanteSorteioModule)
},
{
  path:'ticket-sorteio',
  loadChildren: ()=>import('./ticket-sorteio/ticket-sorteio.module')
        .then(m=>m.TicketSorteioModule)
}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorteioRouteModule { }
