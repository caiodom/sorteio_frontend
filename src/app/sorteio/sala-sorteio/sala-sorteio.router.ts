import { RouterModule, Routes } from "@angular/router";
import { SalaSorteioComponent } from "./sala-sorteio.component";
import { NgModule } from "@angular/core";
import { SalaSorteioGuard } from "./services/sala-sorteio.guard";

const salaSorteioRouterConfig: Routes = [
  {
    path: '',
    component: SalaSorteioComponent,
    canActivate:[SalaSorteioGuard],
    data:[{claim:{name:'TicketSorteio',value:'Adicionar'}}]
  }
]
@NgModule({
  imports: [RouterModule.forChild(salaSorteioRouterConfig)],
  exports: [RouterModule],
})
export class SalaSorteioRoutingModule {

}
