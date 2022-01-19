import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Cartao from './cartao.model';
import Checklist from './checklist.model';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input() cartao: Cartao = new Cartao();
  @Input() indiceCartao: number = 0;
  @Output() notificaCartaoExcluidoEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  atualizarChecklistCartao(checklist: Checklist[]) {
    this.cartao.checklist = checklist;
  }

  atualizaCartao(cartao: Cartao) {
    this.cartao = cartao;
  }

  removeCartao(indice: any) {
    this.notificaCartaoExcluidoEvent.emit(indice as number);
  }
}
