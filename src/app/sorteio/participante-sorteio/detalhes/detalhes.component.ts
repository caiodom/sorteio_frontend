import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { SharedService } from 'src/app/utils/shared-variables';
import { ParticipanteSorteio } from '../models/participante-sorteio';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends FormBaseGlobalComponent implements OnInit {


  participanteSorteio:ParticipanteSorteio= new ParticipanteSorteio();

  constructor(private route: ActivatedRoute,
    protected override sharedService: SharedService) {

    super(sharedService);

    this.participanteSorteio=this.route.snapshot.data['participanteSorteio'];
  }

  ngOnInit(): void {
  }

}
