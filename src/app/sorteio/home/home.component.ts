import { Component, OnInit } from '@angular/core';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { SharedService } from 'src/app/utils/shared-variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends FormBaseGlobalComponent implements OnInit {

  constructor(protected override sharedService: SharedService) {

    super(sharedService);
  }

  ngOnInit(): void {
  }

}
