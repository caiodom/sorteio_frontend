import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { DadosSorteio } from '../../dados-sorteio/models/dados-sorteio';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { DadosSorteioService } from '../../dados-sorteio/services/dados-sorteio.service';

@Component({
  selector: 'app-sortear',
  templateUrl: './sortear.component.html',
  styleUrls: ['./sortear.component.css'],
})
export class SortearComponent extends FormBaseComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  @Input() dadosSorteio: DadosSorteio[];
  @Input() title: string;
  @Input() message: string;
  errorMessage: string;

  dadosSorteioModal: DadosSorteio[];
  sorteioForm: FormGroup;
  idSorteio: string;

  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal) {
    super();

    this.validationMessages = {
      idSorteio: {
        required: 'Informe o sorteio',
      },
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {
    this.sorteioForm = this.fb.group({
      idSorteio: ['', [Validators.required]],
    });

    this.dadosSorteioModal = this.dadosSorteio;
  }

  ngAfterViewInit() {
    super.configurarValidacaoFormularioBase(
      this.formInputElements,
      this.sorteioForm
    );
  }

  enviaSorteio() {
    if (this.sorteioForm.dirty && this.sorteioForm) {
      this.idSorteio = Object.assign(
        {},
        this.idSorteio,
        this.sorteioForm.value
      );
      this.activeModal.close(this.idSorteio);
    }

  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
