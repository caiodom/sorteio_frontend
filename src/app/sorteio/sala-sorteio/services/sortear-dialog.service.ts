import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SortearComponent } from '../sortear/sortear.component';
import { DadosSorteio } from '../../dados-sorteio/models/dados-sorteio';


@Injectable()
export class SortearDialogService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    dadosSorteio:DadosSorteio[],
    dialogSize: 'sm'|'lg' = 'sm'): Promise<string> {
    const modalRef = this.modalService.open(SortearComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.dadosSorteio = dadosSorteio;

    return modalRef.result;
  }

}
