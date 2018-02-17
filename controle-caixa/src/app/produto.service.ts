import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PRODUTOS } from './mock-produtos';

import { Pool, Client } from 'pg';
// import { pg } as pg from 'pg';

// const { Client } = require('pg');
// const client = new Client();
// await client.connect();

@Injectable()
export class ProdutoService {

  selectProduto(msg: String): void{
    const connectionURI = 'postgresql://pe_de_chinelo:@localhost:5432/bd_chinelo';

    const client = new Client({
      user: 'pe_de_chinelo',
      host: 'localhost',
      database:'bd_chinelo',
      password: '',
      port: 5432,
    });
    client.connect();

    client.query('SELECT NOW()', (err, res) => {
      console.log(err, res)
      client.end()
    })
  }

  getProdutos(): Observable<Produto[]>{

	  for(var i=0; i<5; i++){
	    if(i<3){
		    PRODUTOS[i].livro.id = i;
		    PRODUTOS[i].livro.titulo = 'titulo' + i;
		    PRODUTOS[i].livro.autor = 'autor ' +i;
		    PRODUTOS[i].livro.editora = 'editora ' +(i*2);
		    PRODUTOS[i].livro.id_produto = i;
	    } else{
		    PRODUTOS[i].cd.numero = i;
		    PRODUTOS[i].cd.tema = 'tema' + i;
		    PRODUTOS[i].cd.id_produto = i;
	    }
	  }

	  return of(PRODUTOS);

  }
  // getProduto(): Produto[]{}
  constructor() { }

}
