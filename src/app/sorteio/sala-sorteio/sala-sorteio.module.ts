import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaSorteioComponent } from './sala-sorteio.component';
import { SalaSorteioRoutingModule } from './sala-sorteio.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalaSorteioService } from './services/sala-sorteio.service';
import { SortearComponent } from './sortear/sortear.component';
import { SortearDialogService } from './services/sortear-dialog.service';
import { DadosSorteioService } from '../dados-sorteio/services/dados-sorteio.service';



@NgModule({
  declarations: [
    SalaSorteioComponent,
    SortearComponent
  ],
  imports: [
    CommonModule,
    SalaSorteioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ SortearComponent ],
  providers:[
    SalaSorteioService,
    SortearDialogService,
    DadosSorteioService,
    SortearDialogService
  ]
})
export class SalaSorteioModule { }
