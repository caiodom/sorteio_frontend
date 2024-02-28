import { RouterModule, Routes } from "@angular/router";
import { ListaComponent } from "./lista/lista.component";
import { NgModule } from "@angular/core";

const dadosSorteioRouterConfig:Routes=[
  {
    path:'listar-todos',
    component:ListaComponent
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
