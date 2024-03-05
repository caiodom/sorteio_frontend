import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ParticipanteSorteio } from '../models/participante-sorteio';
import { FormBaseGlobalComponent } from 'src/app/base-components/form-base-global.component';
import { ParticipanteSorteioService } from '../services/participante-sorteio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/utils/shared-variables';
import { CurrencyUtils } from 'src/app/utils/currency-utils';
import { CepConsulta } from '../models/cep-consulta';
import { StringUtils } from 'src/app/utils/string-utils';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent  extends FormBaseGlobalComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  participanteSorteio:ParticipanteSorteio;
  participanteSorteioForm:FormGroup;

  constructor(private fb: FormBuilder,
    private service: ParticipanteSorteioService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    protected override sharedService: SharedService) {

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
      this.participanteSorteio=this.route.snapshot.data['participanteSorteio'];

      console.log(this.route.snapshot);
    }



  ngOnInit(): void {


    console.log(this.route.snapshot);

    this.participanteSorteioForm=this.fb.group({
      id:['',[Validators.required]],
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
    });

    console.log(this.participanteSorteio);

    this.participanteSorteioForm.patchValue({
      id:this.participanteSorteio.id,
      nome:this.participanteSorteio.nome,
      cep:this.participanteSorteio.cep,
      logradouro:this.participanteSorteio.logradouro,
      numero:this.participanteSorteio.numero,
      complemento:this.participanteSorteio.complemento,
      estado:this.participanteSorteio.estado,
      cidade:this.participanteSorteio.cidade,
      bairro:this.participanteSorteio.bairro,
      email:this.participanteSorteio.email,
      telefone:this.participanteSorteio.telefone,
      cpf:this.participanteSorteio.cpf
    });

  }

  ngAfterViewInit(): void {
    this.configurarValidacaoFormulario(this.formInputElements);
  }

  editar(){

    if (this.participanteSorteioForm.dirty && this.participanteSorteioForm) {
      this.participanteSorteio = Object.assign(
        {},
        this.participanteSorteio,
        this.participanteSorteioForm.value
      );


      this.service.put(this.participanteSorteio.id,this.participanteSorteio,true).subscribe({
        next:sucesso=>this.processarSucesso(sucesso),
        error:falha=>this.processarFalha(falha)
      })


  }
}


  processarSucesso(response: any) {
    this.participanteSorteioForm.reset();
    this.errors = [];

    let toast = this.toastr.success('Participante editado com sucesso!', 'Sucesso!');

    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/sorteio/participante-sorteio/listar-todos']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
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





  protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
    super.configurarValidacaoFormularioBase(
      formInputElements,
      this.participanteSorteioForm
    );
  }

}
