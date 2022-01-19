import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { CartaoComponent } from './cartao/cartao.component';
import { BtnEdicaoCartaoComponent } from './cartao/btn-edicao-cartao/btn-edicao-cartao.component';
import { BtnNovoCartaoComponent } from './cartao/btn-novo-cartao/btn-novo-cartao.component';
import { BtnExcluirCartaoComponent } from './cartao/btn-excluir-cartao/btn-excluir-cartao.component';
import { ChecklistComponent } from './cartao/checklist/checklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CartaoComponent,
    BtnEdicaoCartaoComponent,
    BtnNovoCartaoComponent,
    BtnExcluirCartaoComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
