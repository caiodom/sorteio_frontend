import { NavigationModule } from 'src/app/navigation/navigation.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorteioComponent } from './sorteio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SorteioRouteModule } from './sorteio.route';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SorteioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavigationModule,
    SorteioRouteModule,
    ReactiveFormsModule

  ]
})
export class SorteioModule { }
