import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Cartao from '../cartao.model';
import Checklist from '../checklist.model';

@Component({
  selector: 'app-btn-novo-cartao',
  templateUrl: './btn-novo-cartao.component.html',
  styleUrls: ['./btn-novo-cartao.component.css']
})
export class BtnNovoCartaoComponent implements OnInit {

  @Input() estilo: string = '';
  @Input() texto: string = '';
  @Output() novoCartaoEvent = new EventEmitter<Cartao>();

  checklist: Checklist[] = [];

  modalRef?: BsModalRef;
  frmNew: FormGroup = new FormGroup({});

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.frmNew = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      detalhes: [null],
      checklist: [null],
    });
  }

  abrirModal(template: TemplateRef<any>) {
    this.frmNew.reset();
    this.checklist = [];
    this.modalRef = this.modalService.show(template);
  }

  salvar() {
    this.modalRef?.hide();
    const cartao = this.frmNew.getRawValue() as Cartao;
    cartao.checklist = this.checklist;
    this.novoCartaoEvent.emit(cartao);
  }

  adicionarChecklist(e: any) {

    e.preventDefault();
    
    let tarefa = new Checklist();
    tarefa.nome = this.frmNew.get("checklist")?.value;
    tarefa.concluido = false;
    this.checklist.push(tarefa);
    
    this.frmNew.get("checklist")?.setValue(null);
  }  

}
