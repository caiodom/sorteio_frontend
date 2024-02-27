import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { RouterModule } from '@angular/router';
import { MenuNoUserComponent } from './menu-no-user/menu-no-user.component';
import { ContatoComponent } from './contato/contato.component';




@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AcessoNegadoComponent,
    MenuNoUserComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AcessoNegadoComponent
  ],
  providers:[

  ]


})
export class NavigationModule { }
