import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";
import { LocalStorageUtils } from "../utils/localstorage-utils";
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private router:Router){ }

  localStorageUtil=new LocalStorageUtils();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let observable= next.handle(req).pipe(catchError(error=>{

      if(error instanceof HttpErrorResponse){

        if(error.status===401){
          this.localStorageUtil.limparDadosLocaisUsuario();
          this.router.navigate(['signin/login'],{queryParams:{returnUrl:this.router.url}});
        }

        if(error.status===403){
          this.router.navigate['/acesso-negado'];
        }


      }

      return throwError(()=>error);


    }));
    return observable;
  }




}
