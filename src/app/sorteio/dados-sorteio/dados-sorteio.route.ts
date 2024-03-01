import { RouterModule, Routes } from "@angular/router";
import { ListaComponent } from "./lista/lista.component";
import { NgModule } from "@angular/core";
import { NovoComponent } from "./novo/novo.component";
import { DadosSorteioGuard } from "./services/dados-sorteio.service.guard";
import { DadosSorteioComponent } from "./dados-sorteio.component";
import { EditarComponent } from "./editar/editar.component";
import { DadosSorteioResolve } from "./services/dados-sorteio.resolve";

const dadosSorteioRouterConfig:Routes=[

  {
    path:'',component:DadosSorteioComponent,
    children: [
      {
        path:'listar-todos',
        component:ListaComponent
      },
      {
        path:'adicionar-novo',
        component:NovoComponent,
        canDeactivate:[DadosSorteioGuard],
        canActivate:[DadosSorteioGuard],
        data:[{claim:{name:'DadosSorteio',value:'Adicionar'}}]
      },
      {
        path:'editar/:id',
        component:EditarComponent,
        canActivate:[DadosSorteioGuard],
        data:[{claim:{name:'DadosSorteio',value:'Atualizar'}}],
        resolve:{
          dadosSorteio:DadosSorteioResolve
        }

      }

    ]
  }



];
@NgModule({
  imports:[
        RouterModule.forChild(dadosSorteioRouterConfig)
  ],
  exports:[RouterModule]

})
export class DadosSorteioRoutingModule{

}
