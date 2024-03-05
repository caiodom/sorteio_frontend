import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { ParticipanteSorteioService } from '../services/participante-sorteio.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/utils/shared-variables';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ParticipanteSorteio } from '../models/participante-sorteio';
import { CepConsulta } from '../models/cep-consulta';
import { StringUtils } from 'src/app/utils/string-utils';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent extends FormBaseGlobalComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];


  participanteSorteioForm:FormGroup;
  participanteSorteio:ParticipanteSorteio;
  formResult: string='';

  constructor(
    private fb: FormBuilder,
    private service: ParticipanteSorteioService,
    private router: Router,
    private toastr: ToastrService,
    protected override sharedService: SharedService
  ) {

    super(sharedService);

    this. validationMessages={

      nome: {
        required:'Entre com o nome do sorteio'
      },
      telefone:{
        required:'Informe o telefone'
      },
      email:{
        required:'Entre com o email'
      },
      cpf:{
        cpf:'CPF em formato inválido'
      }
    }

    super.configurarMensagensValidacaoBase(this.validationMessages);

  }

  ngOnInit(): void {
    this.participanteSorteioForm=this.fb.group({
      nome:['',[Validators.required]],
      cep: [''],
      logradouro:[''],
      numero:[''],
      complemento:[''],
      estado:[''],
      cidade:[''],
      bairro:[''],
      email:['',[Validators.required]],
      telefone:['',[Validators.required]],
      cpf:['',[Validators.required]]


    })

  }

  ngAfterViewInit():void{
    super.configurarValidacaoFormularioBase(this.formInputElements,this.participanteSorteioForm)
  }


  buscarCep(cep: string) {

    cep = StringUtils.somenteNumeros(cep);
    if (cep.length < 8) return;

    this.service.consultarCep(cep)
      .subscribe({
        next: cepRetorno => this.preencherEnderecoConsulta(cepRetorno),
        error: erro => this.errors.push(erro)
      });
  }

  preencherEnderecoConsulta(cepConsulta: CepConsulta) {

    this.participanteSorteioForm.patchValue({
      logradouro: cepConsulta.logradouro,
      bairro: cepConsulta.bairro,
      cep: cepConsulta.cep,
      cidade: cepConsulta.localidade,
      estado: cepConsulta.uf
    });
  }


  cadastrar(){
    if (this.participanteSorteioForm.dirty && this.participanteSorteioForm) {
      this.participanteSorteio = Object.assign(
        {},
        this.participanteSorteio,
        this.participanteSorteioForm.value
      );


      this.formResult = JSON.stringify(this.participanteSorteio);

      this.service.post(this.participanteSorteio, true).subscribe({
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
    this.participanteSorteioForm.reset();
    this.errors = [];

    this.mudancasNaoSalvas = false;
    let toast = this.toastr.success('Participante cadastrado com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/sorteio/participante-sorteio/listar-todos']);
      });
    }
  }

  processarErro(response: any) {
    this.errors = response.error.errors;
    this.toastr.error('Ocorreu um erro '+this.errors);
  }


}
