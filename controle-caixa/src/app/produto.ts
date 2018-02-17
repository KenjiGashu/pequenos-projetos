import {Livro} from './livro';
import {Preco} from './preco';
import {Cd} from './cd';


export class Produto {

    constructor(public id: Number,
		public livro: Livro,
		public cd: Cd,
		public preco: Preco ){
    }
}

// export class Preco {
//     constructor(
// 	public id: Number,
// 	public preco: Number,
// 	public data_inicio: Date,
// 	public data_fim: Date
//     ){}
// }

// export class Livro {
//     constructor(
// 	public id: Number,
// 	public titulo: String,
// 	public autor: String,
// 	public editora: String,
// 	public id_produto: Number	
//     ){}
// }

// export class Cd {
//     constructor(
// 	public numero: Number,
// 	public tema: String,
// 	public id_produto: Number
//     ){}
// }

