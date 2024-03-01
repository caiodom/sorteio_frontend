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
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DadosSorteio } from '../models/dados-sorteio';
import { CurrencyUtils } from 'src/app/utils/currency-utils';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent extends FormBaseGlobalComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  dadosSorteio: DadosSorteio;
  dadosSorteioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DadosSorteioService,
    private router: Router,
    private route: ActivatedRoute,
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

    this.dadosSorteio = this.route.snapshot.data['dadosSorteio'];


  }

  ngOnInit(): void {
    this.dadosSorteioForm = this.fb.group({
      id:['', [Validators.required]],
      descricao: ['', [Validators.required]],
      premio: ['', [Validators.required]],
      valorPremio: ['', [Validators.required]],
    });

    this.dadosSorteioForm.patchValue({
      id: this.dadosSorteio.id,
      descricao: this.dadosSorteio.descricao,
      premio: this.dadosSorteio.premio,
      valorPremio: CurrencyUtils.DecimalParaString(this.dadosSorteio.valorPremio)
    });
  }

  ngAfterViewInit(): void {
    this.configurarValidacaoFormulario(this.formInputElements);
  }

  editar(){

    if (this.dadosSorteioForm.dirty && this.dadosSorteioForm) {
      this.dadosSorteio = Object.assign(
        {},
        this.dadosSorteio,
        this.dadosSorteioForm.value
      );

      this.dadosSorteio.valorPremio=CurrencyUtils.StringParaDecimal(this.dadosSorteio.valorPremio);
      this.service.put(this.dadosSorteio.id,this.dadosSorteio,true).subscribe({
        next:sucesso=>this.processarSucesso(sucesso),
        error:falha=>this.processarFalha(falha)
      })


  }
}
processarSucesso(response: any) {
  this.dadosSorteioForm.reset();
  this.errors = [];

  let toast = this.toastr.success('Dados do sorteio editado com sucesso!', 'Sucesso!');

  if (toast) {
    toast.onHidden.subscribe(() => {
      this.router.navigate(['/sorteio/dados-sorteio/listar-todos']);
    });
  }
}

processarFalha(fail: any) {
  this.errors = fail.error.errors;
  this.toastr.error('Ocorreu um erro!', 'Opa :(');
}




  protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
    super.configurarValidacaoFormularioBase(
      formInputElements,
      this.dadosSorteioForm
    );
  }



}
