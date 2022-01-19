import { Component, Input, OnInit } from '@angular/core';
import Cartao from '../cartao/cartao.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() cartoes: Cartao[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  novoCartao(cartao: any) {
    this.cartoes.push(cartao as Cartao);
  }

  removeCartao(indice: any) {
    this.cartoes.splice(indice as number, 1);
  }
}