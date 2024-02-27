import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { HomeGuard } from "./services/home.guard";

const homeRouterConfig: Routes=[
{
  path:'',
  component:HomeComponent
}

];
@NgModule({
  imports: [
      RouterModule.forChild(homeRouterConfig)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
