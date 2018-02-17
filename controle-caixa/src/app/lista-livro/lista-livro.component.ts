import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { LIVROS } from '../mock-livros'


@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.component.html',
  styleUrls: ['./lista-livro.component.css']
})
export class ListaLivroComponent implements OnInit {
  livros = LIVROS;
  constructor() { }

  ngOnInit() {
  }

}
