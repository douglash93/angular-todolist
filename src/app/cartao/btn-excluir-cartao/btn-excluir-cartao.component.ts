import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-btn-excluir-cartao',
  templateUrl: './btn-excluir-cartao.component.html',
  styleUrls: ['./btn-excluir-cartao.component.css']
})
export class BtnExcluirCartaoComponent implements OnInit {

  @Input() estilo: String = '';
  @Input() texto: String = '';
  @Input() icone: String = '';
  @Input() nomeCartao: String = '';
  @Input() indiceCartao: number = 0;
  @Output() removeCartaoEvent = new EventEmitter<Number>();

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) {}

  ngOnInit() {
  }
  
  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirma() {
    this.modalRef?.hide();
    this.removeCartaoEvent.emit(this.indiceCartao);
  }

  cancela() {
    this.modalRef?.hide();
  }

}
