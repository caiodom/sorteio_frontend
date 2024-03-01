import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoNegadoComponent } from './navigation/acesso-negado/acesso-negado.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin/login',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'sorteio',
    loadChildren: () =>
      import('./sorteio/sorteio.module').then((m) => m.SorteioModule),
  },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
