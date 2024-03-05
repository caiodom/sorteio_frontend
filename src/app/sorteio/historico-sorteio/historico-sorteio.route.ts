import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HistoricoSorteioComponent } from "./historico-sorteio.component";
import { ListarComponent } from "./listar/listar.component";


const historicoSorteioRouterConfig:Routes=[
  {
    path:'',
    component:HistoricoSorteioComponent,
    children: [
      {
        path:'listar-todos',
        component:ListarComponent,

      }
    ]
   }
]
@NgModule({
  imports:[
        RouterModule.forChild(historicoSorteioRouterConfig)
  ],
  exports:[RouterModule]

})
export class HistoricoSorteioRoutingModule{

}
