import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  AfterViewInit,
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
              private toastr: ToastrService) {
    super();

    this.validationMessages = {
      email: {
        required: 'Entre com o seu endereço de email',
        email: 'Endereço de email inválido',
      },
      password: {
        required: 'Entre com a sua senha',
        rangeLenght: 'A senha tem de conter entre 5 e 10 caracteres',
      },
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {
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

    console.log(this.loginForm.errors)
    if(this.loginForm.dirty && this.loginForm.valid){

      let objLogin = {
        userName: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      };

      this.signInService.login(objLogin)
                        .subscribe({
                          next:success=>{this.successProcessing(success)},
                          error:error=>{this.errorProcessing(error)}
                        });


    }
  }

  successProcessing(response:any){
    this.loginForm.reset();
    this.errors=[];

    this.signInService.localStorage.salvarDadosLocaisUsuario(response);

    this.toastr.success('Login realizado com sucesso!','Sucesso!!');


   /* let toast = this.toastr.success('Login realizado com Sucesso!', 'Bem vindo!!!');
    if(toast){
      toast.onHidden.subscribe(() => {
        this.returnUrl
        ? this.router.navigate([this.returnUrl])
        : this.router.navigate(['/home']);
      });
    } */

    this.router.navigate(['/home']);
  }

  errorProcessing(fail:any){
    this.errors=fail.error.errors;
    this.toastr.error('Ocorreu um erro!','Erro');
  }
}

