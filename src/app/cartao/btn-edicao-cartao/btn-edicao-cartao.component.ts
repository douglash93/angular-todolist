import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import Cartao from '../cartao.model';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Checklist from '../checklist.model';

@Component({
  selector: 'app-btn-edicao-cartao',
  templateUrl: './btn-edicao-cartao.component.html',
  styleUrls: ['./btn-edicao-cartao.component.css']
})
export class BtnEdicaoCartaoComponent implements OnInit {

  @Input() estilo: string = '';
  @Input() texto: string = '';
  @Input() icone: string = '';
  @Input() cartao: Cartao = new Cartao();
  @Output() atualizaCartaoEvent = new EventEmitter<Cartao>(); 

  modalRef?: BsModalRef<any>;
  frmEdit: FormGroup = new FormGroup({});
  checklist: Checklist[] = [];

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.frmEdit = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      detalhes: [null],
      checklist: [Array],
    });
  }

  get f() {
    return this.frmEdit?.controls;
  }

  atualizaChecklist(checklist: any) {
    this.cartao.checklist = checklist;
  }

  atualizaCartao() {
    this.modalRef?.hide();
    const cartao = this.frmEdit?.getRawValue() as Cartao;
    this.atualizaCartaoEvent.emit(cartao);
  }
  
  abrirModal(template: TemplateRef<any>) {
    this.frmEdit?.patchValue(this.cartao);
    this.modalRef = this.modalService.show(template);
  }

}
