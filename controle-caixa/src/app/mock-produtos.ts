import { Produto } from './produto';
import { Livro } from './livro';
import { Cd } from './cd';
import { Preco } from './preco';

// livro: Livro = {};
// cd: Cd = {};
// preco: Preco = {};

export const PRODUTOS: Produto[] = [
  {id: 1, livro: new Livro(), cd: new Cd(), preco: new Preco(1, 12.50, new Date(), new Date())},
  {id: 2, livro: new Livro(), cd: new Cd(), preco: new Preco(2, 22.20, new Date(), new Date())},
  {id: 3, livro: new Livro(), cd: new Cd(), preco: new Preco(3, 33.30, new Date(), new Date())},
  {id: 4, livro: new Livro(), cd: new Cd(), preco: new Preco(2, 22.20, new Date(), new Date())},
  {id: 5, livro: new Livro(), cd: new Cd(), preco: new Preco(3, 33.30, new Date(), new Date())},
  // {id: 1, livro: {	id: 1, titulo: 'um titulo', autor: 'um autor', editora: 'uma editora', id_produto: 1}, cd: {}, preco: {id: 1, preco: 12.50, data_inicio: new Date(), data_fim: new Date()}},

  // {id: 2, {	id: 2, titulo: 'um titulo2', autor: 'um autor2', editora: 'uma editora2', id_produto: 2}, {}, {id: 2, preco: 22.20, data_inicio: new Date(), data_fim: new Date()}},

  // {id: 3, {	id: 3, titulo: 'um titulo3', autor: 'um autor3', editora: 'uma editora3', id_produto: 3}, {}, {id: 3, preco: 33.30, data_inicio: new Date(), data_fim: new Date()}},

  // {id: 4, {	id: 1, titulo: 'um titulo', autor: 'um autor', editora: 'uma editora', id_produto: 4}, {}, {id: 1, preco: 12.50, data_inicio: new Date(), data_fim: new Date()}},

  // {id: 5, {	id: 2, titulo: 'um titulo2', autor: 'um autor2', editora: 'uma editora2', id_produto: 5}, {}, {id: 2, preco: 22.20, data_inicio: new Date(), data_fim: new Date()}},

  // {id: 6, {	id: 3, titulo: 'um titulo3', autor: 'um autor3', editora: 'uma editora3', id_produto: 6}, {}, {id: 3, preco: 33.30, data_inicio: new Date(), data_fim: new Date()}},

  // {id: 7, {}, {	numero: 1,tema: 'tema de cd 1',id_produto: 7}, {id: 4, preco: 10.00, data_inicio: new Date(), data_fim: new Date()}},

  // {id: 8, {}, {	numero: 2,tema: 'tema de cd 2',id_produto: 8}, {id: 4, preco: 10.00, data_inicio: new Date(), data_fim: new Date()}},
];

// export getProdutos() Produto[]{
//   for(i=0; i< 10; i++){
//     PRODUTOS.push(new Produto(1, new Livro(), new Cd(), new Preco(i, i*3, new Date(), new Date())));
//     if(i<5){
//       PRODUTOS[i].livro.id = i;
//       PRODUTOS[i].livro.titulo = 'titulo' + i;
//       PRODUTOS[i].livro.autor = 'autor ' +i;
//       PRODUTOS[i].livro.editora = 'editora ' +(i*2);
//       PRODUTOS[i].livro.id_produto = i;
//     } else{
//       PRODUTOS[i].cd.numero = i;
//       PRODUTOS[i].cd.tema = 'tema' + i;
//       PRODUTOS[i].cd.id_produto = i;
//     }

//   }
// }
