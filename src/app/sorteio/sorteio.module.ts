import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorteioComponent } from './sorteio.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SorteioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SorteioModule { }
