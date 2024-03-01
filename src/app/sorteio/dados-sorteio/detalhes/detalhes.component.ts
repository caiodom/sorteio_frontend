import { ActivatedRoute } from '@angular/router';
import { DadosSorteio } from './../models/dados-sorteio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {

  dadosSorteio:DadosSorteio= new DadosSorteio();

  constructor(private route: ActivatedRoute) {

    this.dadosSorteio=this.route.snapshot.data['dadosSorteio'];

  }

  ngOnInit(): void {
  }

}
