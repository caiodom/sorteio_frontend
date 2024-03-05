import { ParticipanteSorteio } from './../../participante-sorteio/models/participante-sorteio';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TicketSorteio } from '../models/ticket-sorteio';
import { TicketSorteioService } from '../services/ticket-sorteio.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/utils/shared-variables';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { DadosSorteio } from '../../dados-sorteio/models/dados-sorteio';
import { ParticipanteSorteioService } from '../../participante-sorteio/services/participante-sorteio.service';
import { DadosSorteioService } from '../../dados-sorteio/services/dados-sorteio.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css'],
})
export class NovoComponent extends FormBaseGlobalComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  ticketSorteio: TicketSorteio;
  participantesSorteio: ParticipanteSorteio[];
  dadosSorteio: DadosSorteio[];

  ticketSorteioForm: FormGroup;
  formResult: string = '';
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private service: TicketSorteioService,
    private participanteService: ParticipanteSorteioService,
    private dadosSorteioService: DadosSorteioService,
    private router: Router,
    private toastr: ToastrService,
    protected override sharedService: SharedService
  ) {
    super(sharedService);

    this.validationMessages = {
      idParticipanteSorteio: {
        required: 'Entre com o Participante do Sorteio',
      },
      idDadosSorteio: {
        required: 'Entre com os dados do sorteio',
      },
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);

    console.log('ENTRANDO NO COMPONENTE NOVO');
  }

  ngOnInit(): void {
    this.dadosSorteioService.get(false).subscribe({
      next: (success) => {
        this.dadosSorteio = success;
      },
      error: (error) => {
        this.errorMessage;
      },
    });

    this.participanteService.get(false).subscribe({
      next: (success) => {
        this.participantesSorteio = success;
      },
      error: (error) => {
        this.errorMessage;
      },
    });

    this.ticketSorteioForm = this.fb.group({
      idParticipanteSorteio: ['', [Validators.required]],
      idDadosSorteio: ['', [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(
      this.formInputElements,
      this.ticketSorteioForm
    );
  }

  cadastrar() {
    if (this.ticketSorteioForm.dirty && this.ticketSorteioForm) {
      this.ticketSorteio = Object.assign(
        {},
        this.ticketSorteio,
        this.ticketSorteioForm.value
      );

      this.formResult = JSON.stringify(this.ticketSorteio);

      this.service.post(this.ticketSorteio, true).subscribe({
        next: (sucesso) => {
          this.processarSucesso(sucesso);
        },
        error: (erro) => {
          this.processarErro(erro);
        },
      });
    }
  }

  processarSucesso(response: any) {
    this.ticketSorteioForm.reset();
    this.errors = [];

    this.mudancasNaoSalvas = false;
    let toast = this.toastr.success(
      'Ticket cadastrado com sucesso!',
      'Sucesso!'
    );
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['sorteio/ticket-sorteio/listar-todos']);
      });
    }
  }

  processarErro(response: any) {
    this.errors = response.error.errors;
    this.toastr.error('Ocorreu um erro ' + this.errors);
  }
}
