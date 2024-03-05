import { ActivatedRoute } from '@angular/router';
import { DadosSorteio } from './../models/dados-sorteio';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/utils/shared-variables';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends FormBaseGlobalComponent {

  dadosSorteio:DadosSorteio= new DadosSorteio();

  constructor(private route: ActivatedRoute,
    protected override sharedService: SharedService) {
    super(sharedService);
    this.dadosSorteio=this.route.snapshot.data['dadosSorteio'];

  }

  ngOnInit(): void {
  }

}
