import { HomeModule } from './home/home.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SorteioComponent } from "./sorteio.component";

const routes: Routes = [
{
  path:'',
  component:SorteioComponent
},
{
  path:'home',
  loadChildren: ()=>import('./home/home.module')
        .then(m=>m.HomeModule)
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
},
{
  path:'sala-sorteio',
  loadChildren: ()=>import('./sala-sorteio/sala-sorteio.module')
        .then(m=>m.SalaSorteioModule)
}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorteioRouteModule { }
