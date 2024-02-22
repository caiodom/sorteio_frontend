import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SigninComponent } from "./signin.component";
import { SigninGuard } from "./services/signin.guard";



const signinRouterConfig:Routes=
[
    {
        path:'',component:SigninComponent,
        children:
        [
            {path:'register',component:RegisterComponent,canActivate:[SigninGuard],canDeactivate:[SigninGuard]},
            {path:'login',component:LoginComponent,canActivate:[SigninGuard]},

        ]
    }
]

@NgModule({
    imports:[
    RouterModule.forChild(signinRouterConfig)
    ],
    exports:[RouterModule]
})
export class SignInRoutingModule{

}
