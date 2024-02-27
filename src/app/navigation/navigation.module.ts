import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { RouterModule } from '@angular/router';

import { ContatoComponent } from './contato/contato.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { SignInService } from '../signin/services/signin.service';




@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    NotFoundComponent,
    AcessoNegadoComponent,
    ContatoComponent,
    MenuLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    MenuComponent,
    MenuLoginComponent,
    FooterComponent,
    NotFoundComponent,
    AcessoNegadoComponent
  ],
  providers:[
  ]


})
export class NavigationModule { }
