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
    private router: Router
  ) {
    super();

    this.validationMessages = {
      nome: {
        required: 'Digite seu nome',
      },
      email: {
        required: 'Digite seu Email',
        email: 'Email inválido',
      },
      senha: {
        required: 'Digite sua senha',
        rangeLength: 'A senha deve conter entre 6 e 15 caracteres',
      },
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {
    let senha = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]);

    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      nome: ['', [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.registroForm);
  }

  registrarConta() {
    if (this.registroForm.dirty && this.registroForm.valid) {
      this.user = {
        id: '0',
        userName: this.registroForm.get('nome').value,
        isAdmin: false,
        password: this.registroForm.get('senha').value,
        email: this.registroForm.get('email').value,
      };

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
