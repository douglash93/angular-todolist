import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Checklist from '../checklist.model';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  @Input() cardIndex: number = 0;
  @Input() checklist: Checklist[] = [];
  @Output() updateChecklistEvent = new EventEmitter<Checklist[]>();

  constructor() { }

  ngOnInit(): void {
  }

  updateChecklist(indice: number) {
    this.checklist[indice].concluido = (!this.checklist[indice].concluido);
    this.updateChecklistEvent.emit(this.checklist);
  }
}
