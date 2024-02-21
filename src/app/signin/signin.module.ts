import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SigninComponent } from "./signin.component";
import { SignInRoutingModule } from "./signin.route";
import { SignInService } from "./services/signin.service";
import { SigninGuard } from "./services/signin.guard";



@NgModule({
    declarations:[
        SigninComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        SignInRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
    providers:[
        SignInService,
        SigninGuard

    ]
})
export class SigninModule { }
