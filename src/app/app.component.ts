import { Component, OnInit } from '@angular/core';
import Cartao from './cartao/cartao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  tarefas = [
    {
      nome: 'Estudar SOLID',
      descricao: 'Melhorar os conhecimentos nesses princípios de programação',
      checklist: [
        {
          nome: 'Princípio de responsabilidade única',
          concluido: true,
        },
        {
          nome: 'Princípio Aberto-Fechado',
          concluido: false,
        },
        {
          nome: 'Princípio da substituição de Liskov',
          concluido: false,
        },
        {
          nome: 'Princípio da Segregação da Interface',
          concluido: false,
        },
        {
          nome: 'Princípio da inversão da dependência',
          concluido: false,
        }
      ]
    },
    {
      nome: 'Estudar Orientação a Objetos',
      descricao: 'Compreender orientação a objetos e aplicar em exercícios práticos',
      checklist: [
        {
          nome: 'Abstração',
          concluido: true,
        },
        {
          nome: 'Encapsulamento',
          concluido: false,
        },
        {
          nome: 'Herança',
          concluido: false,
        },
        {
          nome: 'Polimorfismo',
          concluido: false,
        },
      ]
    }
  ];

  cartoes: Cartao[] = [];

  ngOnInit(): void {
    
    this.tarefas.forEach((t) => {
      let cartao = new Cartao();
      cartao.nome = t.nome;
      cartao.descricao = t.descricao;
      cartao.checklist = t.checklist;
      this.cartoes.push(cartao);
    });
  }



}
