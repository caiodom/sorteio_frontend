import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes=[

  {
    path:'',
    redirectTo:'/signin/login',
    pathMatch:'full',

  },
  {
    path:'signin',
        loadChildren:()=>import('./signin/signin.module')
                .then(m=>m.SigninModule)
  },
  {
    path:'sorteio',
        loadChildren:()=> import('./sorteio/sorteio.module')
                            .then(m=>m.SorteioModule)
  }


];

@NgModule({
  imports:[RouterModule.forRoot(routes,{relativeLinkResolution:'legacy'})],
  exports:[RouterModule]
})
export class AppRoutingModule{ }
