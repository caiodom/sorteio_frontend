import {Injectable} from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class SharedService {

  mostraMenu:boolean=true;

  constructor() {}

  setMenuValue(value:boolean){
   this.mostraMenu = value;
  }

  getMenuValue(){
   return this.mostraMenu;
  }
}
