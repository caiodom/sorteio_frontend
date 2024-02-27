import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpClient} from '@angular/common/http';


import { User } from "src/app/models/user";
import { BaseHeaderService } from "src/app/services/base.header.service";
import { environment } from "src/environments/environment";


@Injectable()
export class SignInService extends BaseHeaderService
{

    constructor(private http:HttpClient){
        super();
    }


registerUser(user:User,isAdmin:boolean):Observable<User>{

        let response=this.http
                            .post(environment.api + 'auth/nova-conta',user,(isAdmin)? this.ObterAuthHeaderJson()
                                                                                                 : this.ObterHeaderJson())
                            .pipe(
                                map(this.extractBase),
                                catchError(this.serviceError)
                            );
                            return response;

    }

login(user:any):Observable<any>{

        let response=this.http
                         .post(environment.api + 'auth/entrar',user,this.ObterHeaderJson())
                         .pipe(
                             map(this.extractBase),
                             catchError(this.serviceError));

                             return response;
    }

}
