import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SorteioModule } from './sorteio/sorteio.module';
import { NavigationModule } from './navigation/navigation.module';
import { ErrorInterceptor } from './services/error.handler.service';

export const httpInterceptorProviders=[
  { provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptor,multi:true}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationModule,
    SorteioModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
