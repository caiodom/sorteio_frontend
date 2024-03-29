import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage-utils';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit {

  token:string="";
  user:any;
  email:string="";
  localStorageUtils=new LocalStorageUtils();

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  usuarioLogado():boolean{
    this.token=this.localStorageUtils.obterTokenUsuario();
    this.user=this.localStorageUtils.obterUsuario();

    if(this.user)
     this.email=this.user.email;




     return this.token!==null;

  }

  logout(){
    this.localStorageUtils.limparDadosLocaisUsuario();
    this.router.navigate(['signin/login']);
  }




}
