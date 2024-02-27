import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { User } from 'src/app/models/user';
import { SignInService } from '../services/signin.service';
import { Router } from '@angular/router';
import { CustomValidators } from '@narik/custom-validators';
import { SharedService } from 'src/app/utils/shared-variables';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent
  extends FormBaseComponent
  implements OnInit, AfterViewInit
{
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];



  registroForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private signinService: SignInService,
    private router: Router,
    private sharedService: SharedService
  ) {
    super();

    this.validationMessages = {
      email: {
        required: 'Digite seu Email',
        email: 'Email inválido',
      },
      password: {
        required: 'Digite sua senha',
        rangeLength: 'A senha deve conter entre 6 e 15 caracteres',
      },
      confirmPassword: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {
    this.sharedService.setMenuValue(false);

    let password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]);

    let confirmPassword = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(password)]);

    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: password,
      confirmPassword: confirmPassword,
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.registroForm);
  }

  registrarConta() {
    if (this.registroForm.dirty && this.registroForm.valid) {
      this.user = Object.assign({}, this.user, this.registroForm.value);

      this.signinService.registerUser(this.user, false).subscribe({
        next: (success) => {
          this.successProcessing(success);
        },
        error: (error) => {
          this.errorProcessing(error);
        },
      });

      this.mudancasNaoSalvas = false;
    }
  }

  successProcessing(response: any) {
    this.registroForm.reset();
    this.errors = [];

    this.signinService.localStorage.salvarDadosLocaisUsuario(response.data);
    this.router.navigate(['/signin/login']);
  }
  errorProcessing(fail: any) {
    this.errors = fail.error.errors;
  }
}
