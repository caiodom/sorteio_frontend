import { Component } from '@angular/core';
import { SharedService } from './utils/shared-variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorteio_frontend';

  constructor(private sharedService: SharedService){

  }

  mostraMenu(){
    return this.sharedService.getMenuValue();
  }
}
