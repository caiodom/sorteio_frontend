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

  constructor(private fb: FormBuilder, private router: Router,private signInService:SignInService) {
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

    super.configureValidationMessagesBase(this.validationMessages);
  }

  ngOnInit(): void {
    let password = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]);

    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: password,
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.process(this.loginForm);
    });
  }

  login(){
    if(this.loginForm.dirty && this.loginForm.valid){
      this.user=Object.assign({},this.user,this.loginForm.value);

      this.signInService.login(this.user)
                        .subscribe(
                          success=>{this.successProcessing(success)},
                          error=>{this.errorProcessing(error)}
                        )

    }
  }

  successProcessing(response:any){
    this.loginForm.reset();
    this.errors=[];

    this.signInService.localStorage.salvarDadosLocaisUsuario(response);

    this.router.navigate(['/home']);
  }

  errorProcessing(fail:any){
    this.errors=fail.error.errors;
  }
}

