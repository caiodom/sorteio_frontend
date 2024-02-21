import { ValidationMessages } from './../utils/interfaces/generic-form-validation-interface';
import { GenericValidator } from '../utils/generic-form-validation';
import {
  DisplayMessage,
  ValidationMessages,
} from '../utils/interfaces/generic-form-validation-interface';
import { FormGroup } from '@angular/forms';
import { Observable, fromEvent, merge } from 'rxjs';
import { ElementRef } from '@angular/core';

export abstract class FormBaseComponent {
  errors: any[] = [];

  displayMessage: DisplayMessage | undefined = {};
  validationMessages: ValidationMessages | undefined = {};
  genericValidator: GenericValidator | undefined;
  unsavedChanges: boolean | undefined;

  protected configureValidationMessagesBase(
    validationMessage: ValidationMessages
  ) {
    this.genericValidator = new GenericValidator(validationMessage);
  }

  private validateForm(formGroup: FormGroup) {
    this.displayMessage = this.genericValidator?.process(formGroup);
    this.unsavedChanges = true;
  }

  protected configureValidationFormBase(
    formInputElements: ElementRef[],
    formGroup: FormGroup
  ) {
    let controlBlurs: Observable<any>[] = formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.validateForm(formGroup);
    });
  }
}
