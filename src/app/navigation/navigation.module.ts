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
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from '../services/confirmation-dialog.service';




@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    NotFoundComponent,
    AcessoNegadoComponent,
    ContatoComponent,
    MenuLoginComponent,
    ConfirmationDialogComponent
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
  entryComponents: [ ConfirmationDialogComponent ],
  providers:[
    ConfirmationDialogService
  ]


})
export class NavigationModule { }
