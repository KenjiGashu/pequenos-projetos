import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProdutoService } from './produto.service'
import { AppComponent } from './app.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ListaLivroComponent } from './lista-livro/lista-livro.component';


@NgModule({
  declarations: [
    AppComponent,
    TransacoesComponent,
    ListaProdutoComponent,
    ListaLivroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
	  ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
