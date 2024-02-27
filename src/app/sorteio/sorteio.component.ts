import { Component, OnInit } from '@angular/core';
import { SharedService } from '../utils/shared-variables';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html'
})
export class SorteioComponent implements OnInit {

  constructor(private sharedService: SharedService) { }


  ngOnInit(): void {
    this.sharedService.setMenuValue(true);
  }


}
