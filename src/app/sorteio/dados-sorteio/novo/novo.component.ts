import { DadosSorteio } from './../models/dados-sorteio';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { SharedService } from 'src/app/utils/shared-variables';
import { DadosSorteioService } from '../services/dados-sorteio.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurrencyUtils } from 'src/app/utils/currency-utils';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css'],
})
export class NovoComponent extends FormBaseGlobalComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  dadosSorteioForm: FormGroup;
  dadosSorteio: DadosSorteio;
  formResult: string = '';

  constructor(
    private fb: FormBuilder,
    private service: DadosSorteioService,
    private router: Router,
    private toastr: ToastrService,
    protected override sharedService: SharedService
  ) {
    super(sharedService);
    this.validationMessages = {
      descricao: {
        required: 'Entre com a descrição do sorteio',
      },
      premio: {
        required: 'Entre com o prêmio',
      },
      valorPremio: {
        required: 'Entre com o valor do prêmio',
      },
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {
    this.dadosSorteioForm = this.fb.group({
      descricao: ['', [Validators.required]],
      premio: ['', [Validators.required]],
      valorPremio: ['', [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(
      this.formInputElements,
      this.dadosSorteioForm
    );
  }

  cadastrarDadosSorteio() {
    if (this.dadosSorteioForm.dirty && this.dadosSorteioForm) {
      this.dadosSorteio = Object.assign(
        {},
        this.dadosSorteio,
        this.dadosSorteioForm.value
      );

        this.dadosSorteio.valorPremio=CurrencyUtils.StringParaDecimal(this.dadosSorteio.valorPremio);

      this.formResult = JSON.stringify(this.dadosSorteio);

      this.service.post(this.dadosSorteio, true).subscribe({
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
    this.dadosSorteioForm.reset();
    this.errors = [];

    this.mudancasNaoSalvas = false;
    this.router.navigate(['sorteio/dados-sorteio/listar-todos']);
  }

  processarErro(response: any) {
    this.errors = response.error.errors;
  }
}
