
import { ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable, fromEvent, merge } from 'rxjs';

import { GenericValidator } from '../utils/generic-form-validation';
import {
  DisplayMessage,
  ValidationMessages,
} from '../utils/interfaces/generic-form-validation-interface';

export abstract class FormBaseComponent {
  errors: any[] = [];
  displayMessage: DisplayMessage = {};
  genericValidator: GenericValidator;
  validationMessages: ValidationMessages;

  mudancasNaoSalvas: boolean;

  protected configurarMensagensValidacaoBase(
    validationMessages: ValidationMessages
  ) {
    this.genericValidator = new GenericValidator(validationMessages);
  }

  protected configurarValidacaoFormularioBase(
    formInputElements: ElementRef[],
    formGroup: FormGroup
  ) {
    let controlBlurs: Observable<any>[] = formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.validarFormulario(formGroup);
    });
  }

  protected validarFormulario(formGroup: FormGroup) {
    this.displayMessage = this.genericValidator.processarMensagens(formGroup);
    this.mudancasNaoSalvas = true;
  }
}
