import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from '../mock-produtos';
import { Produto } from '../produto';
import { Livro } from '../livro';
import { Cd } from '../cd';
import { Preco } from '../preco';
import { ProdutoService} from '../produto.service';

// import { getProdutos } from '../mock-produtos';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})


export class ListaProdutoComponent implements OnInit {

  produtos: Produto[];
  mensagem: String;
  constructor(private produtoService: ProdutoService ) { }

  ngOnInit() {
    this.getProdutos();
    this.produtoService.selectProduto(this.mensagem);
  }

  getProdutos(): void{
    this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
  }



}
