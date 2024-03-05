import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaSorteioComponent } from './sala-sorteio.component';
import { SalaSorteioRoutingModule } from './sala-sorteio.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalaSorteioService } from './services/sala-sorteio.service';



@NgModule({
  declarations: [
    SalaSorteioComponent
  ],
  imports: [
    CommonModule,
    SalaSorteioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    SalaSorteioService
  ]
})
export class SalaSorteioModule { }
