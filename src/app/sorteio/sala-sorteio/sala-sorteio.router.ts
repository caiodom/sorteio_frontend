import { RouterModule, Routes } from "@angular/router";
import { SalaSorteioComponent } from "./sala-sorteio.component";
import { NgModule } from "@angular/core";

const salaSorteioRouterConfig: Routes = [
  {
    path: '',
    component: SalaSorteioComponent,
  }
]
@NgModule({
  imports: [RouterModule.forChild(salaSorteioRouterConfig)],
  exports: [RouterModule],
})
export class SalaSorteioRoutingModule {

}
