import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { LocalStorageUtils } from '../utils/localstorage-utils';

export abstract class BaseGuard{

    private localStorageUtils=new LocalStorageUtils();

    constructor(protected router:Router){

    }

    protected claimsValidator(routeAc:ActivatedRouteSnapshot):boolean{

        if(!this.localStorageUtils.obterTokenUsuario()){
            this.router.navigate['/login/'],{queryParams:{returnUrl:this.router.url}};
        }

        let user=this.localStorageUtils.obterUsuario();

        let claim:any=routeAc.data[0];

        if(claim!==undefined){

            let claim=routeAc.data[0]['claim'];

            if(claim){
                if(!user.claims){
                    this.acessoNegado();
                }

                let userClaims=user.claims.find(x=>x.claimType===claim.name);

                if(!userClaims){
                    this.acessoNegado();
                }

                let claimValues=userClaims.claimValue as string;

                if(!claimValues.includes(claim.value)){
                    this.acessoNegado();
                }
            }
        }

        return true;
    }

    private acessoNegado() {
        this.router.navigate(['/acesso-negado']);
    }

}
