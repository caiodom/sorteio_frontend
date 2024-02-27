import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, fromEvent, merge } from 'rxjs';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { User } from 'src/app/models/user';
import { SignInService } from '../services/signin.service';
import { CustomValidators } from '@narik/custom-validators';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/utils/shared-variables';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent
  extends FormBaseComponent
  implements OnInit, AfterViewInit
{
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  loginForm: FormGroup;
  user: User;


  constructor(private fb: FormBuilder,
              private router: Router,
              private signInService:SignInService,
              private toastr: ToastrService,
              private sharedService: SharedService) {
    super();

    this.validationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      }
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {
    this.sharedService.setMenuValue(false);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.loginForm);
    console.log(this.loginForm.errors);
  }

  login(){

    if (this.loginForm.dirty && this.loginForm.valid) {
      this.user = Object.assign({}, this.user, this.loginForm.value);

      this.signInService.login(this.user)
      .subscribe({
        next:success=>{this.processarSucesso(success)},
        error:error=>{this.processarFalha(error)}
      });
    }
  }

  processarSucesso(response:any){
    this.loginForm.reset();
    this.errors=[];
    console.log(response);

    this.signInService.localStorage.salvarDadosLocaisUsuario(response.data);

    this.toastr.success('Login realizado com sucesso!','Sucesso!!');


   /* let toast = this.toastr.success('Login realizado com Sucesso!', 'Bem vindo!!!');
    if(toast){
      toast.onHidden.subscribe(() => {
        this.returnUrl
        ? this.router.navigate([this.returnUrl])
        : this.router.navigate(['sorteio/home']);
      });
    } */

    this.router.navigate(['sorteio/home']);
  }

  processarFalha(fail:any){

    console.log(fail);
    this.errors=fail.error.errors;
    this.toastr.error('Ocorreu um erro!','Erro');
  }
}

