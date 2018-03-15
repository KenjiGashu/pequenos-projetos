var { Client, Pool } = require('pg');
var parser = require('./liquibase-parser.js');
var fs = require('fs');
var msglogger = require('./messagelogger.js');
var liquibase_properties = './resources/liquibase/liquibase-connection.properties';




module.exports.selectProdutosLivrosTitulo = function(titulo, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select * from livro, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.titulo=$1;",
		values: [titulo],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectProdutosLivrosAutor = function(autor, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select * from livro, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.autor=$1;",
		values: [autor],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectProdutosLivrosEditora = function(editora, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select * from livro, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.editora=$1;",
		values: [editora],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectProdutosLivrosAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select * from livro, produto, preco, estoque where estoque.produto_id = produto.id and livro.id_produto=produto.id and produto.id_preco = preco.id;",
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectProdutosCdsTema = function(tema, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:"select * from cd, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = cd.id_produto and produto.id_preco = preco.id and cd.tema like $1;",
		values: [tema],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectProdutosCdsNumero = function(numero, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select * from cd, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = cd.id_produto and produto.id_preco = preco.id and cd.numero=$1;",
		values: [numero],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectProdutosCdsAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select * from cd, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = cd.id_produto and produto.id_preco = preco.id;",
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectPessoaAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from pessoa;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectPessoaNome = function(nome, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from pessoa where nome = $1;',
		values: [nome],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectPessoaAssociado = function(associado, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from pessoa where pessoa."associado?" = $1;',
		values: [associado],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectPessoaCpf = function(cpf, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from pessoa where pessoa.cpf = $1;',
		values: [cpf],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectPessoaRg = function(rg, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from pessoa where pessoa.rg = $1;',
		values: [rg],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectProdutosAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from produto left join livro on produto.id = livro.id_produto left join cd on produto.id = cd.id_produto;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectCompraAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectCompraPessoaNome = function(nome, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.nome=$1;',
		values: [nome],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}



module.exports.selectCompraPessoaAssociado = function(associado, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.associado=$1;',
		values: [associado],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectCompraPessoaCpf = function(cpf, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.cpf=$1;',
		values: [cpf],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectCompraPessoaRg = function(rg, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.rg=$1;',
		values: [rg],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectCompraProdutosLivrosAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.id is not null;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectCompraProdutosLivrosTitulo = function(titulo, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.titulo=$1;',
		values: [titulo],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectCompraProdutosLivrosAutor = function(autor, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.autor=$1;',
		values: [autor],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectCompraProdutosLivrosEditora = function(editora, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.editora=$1;',
		values: [editora],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectCompraProdutosCdAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.id is not null;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectCompraProdutosCdNumero = function(numero, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero=$1;',
		values: [numero],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectCompraProdutosCdTema = function(tema, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.tema=$1;',
		values: [tema],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectCompraSum = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select sum(preco) from compra join produto on produto.id = compra.id_produto join preco on preco.id = produto.id_preco;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.updatecompraId = function(id, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select sum(preco) from compra join produto on produto.id = compra.id_produto join preco on preco.id = produto.id_preco;',
		values: [titulo],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoPessoaNome = function(nome, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.nome=$1;',
		values: [nome],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}



module.exports.selectTransacaoPessoaAssociado = function(associado, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.associado=$1;',
		values: [associado],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectTransacaoPessoaCpf = function(cpf, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.cpf=$1;',
		values: [cpf],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoPessoaRg = function(rg, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.rg=$1;',
		values: [rg],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectTransacaoProdutosLivrosAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.id is not null;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoProdutosLivrosTitulo = function(titulo, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.titulo=$1;',
		values: [titulo],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoProdutosLivrosAutor = function(autor, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.autor=$1;',
		values: [autor],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoProdutosLivrosEditora = function(editora, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.editora=$1;',
		values: [editora],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoProdutosCdAll = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.id is not null;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectTransacaoProdutosCdNumero = function(numero, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero=$1;',
		values: [numero],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoProdutosCdTema = function(tema, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.tema=$1;',
		values: [tema],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoDescricao = function(descricao, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao.descricao=$1;',
		values: [descricao],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoData = function(data, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao.data=$1;',
		values: [data],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.selectTransacaoPrecos = function(preco, callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao.valor=$1;',
		values: [preco],
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}


module.exports.selectTransacaoSum = function(callback, response){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select sum(preco) from transacao join produto on produto.id = transacao.id_produto join preco on preco.id = produto.id_preco;',
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
}

module.exports.updatePessoa = function(pessoa){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var pessoavar = Object.keys(pessoa);
	    var querytext = "update pessoa set "; 
	    for(i=0; i< pessoavar.length; i++){
		if(pessoavar[i] == "associado?"){
		    querytext+= '"' + pessoavar[i]+ '"' + " = " + pessoa[pessoavar[i]] ;
		}else querytext+= pessoavar[i] + " = " + "'" + pessoa[pessoavar[i]] + "'" ;
		
		if(i < pessoavar.length-1) querytext += " , ";
	    }
	    querytext += " where id = " + pessoa.id + ";";
	    console.log(querytext);
	    var query = {
		// text:'update pessoa set ',
		text: querytext,
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
};


module.exports.updateLivro = function(livro){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var livrovar = Object.keys(livro);
	    var querytext = "update livro set "; 
	    for(i=0; i< livrovar.length; i++){
		if(!livrovar[i].includes("id")){
		    querytext += livrovar[i] + " = " + "'" + livro[livrovar[i]] + "'" ;
		}
		
		
		if(i < livrovar.length-1) querytext += " , ";
	    }
	    querytext += " where id = " + livro.id + ";";
	    console.log(querytext);
	    var query = {
		 text:'select * from livro;',
		// text: querytext,
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
};

module.exports.updateCd = function(pessoa){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var pessoavar = Object.keys(pessoa);
	    var querytext = "update pessoa set "; 
	    for(i=0; i< pessoavar.length; i++){
		if(pessoavar[i] == "associado?"){
		    querytext+= '"' + pessoavar[i]+ '"' + " = " + pessoa[pessoavar[i]] ;
		}else querytext+= pessoavar[i] + " = " + "'" + pessoa[pessoavar[i]] + "'" ;
		
		if(i < pessoavar.length-1) querytext += " , ";
	    }
	    querytext += " where id = " + pessoa.id + ";";
	    console.log(querytext);
	    var query = {
		// text:'update pessoa set ',
		text: querytext,
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
};

module.exports.updateCompra = function(pessoa){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var pessoavar = Object.keys(pessoa);
	    var querytext = "update pessoa set "; 
	    for(i=0; i< pessoavar.length; i++){
		if(pessoavar[i] == "associado?"){
		    querytext+= '"' + pessoavar[i]+ '"' + " = " + pessoa[pessoavar[i]] ;
		}else querytext+= pessoavar[i] + " = " + "'" + pessoa[pessoavar[i]] + "'" ;
		
		if(i < pessoavar.length-1) querytext += " , ";
	    }
	    querytext += " where id = " + pessoa.id + ";";
	    console.log(querytext);
	    var query = {
		// text:'update pessoa set ',
		text: querytext,
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
};

module.exports.updatePreco = function(pessoa){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var pessoavar = Object.keys(pessoa);
	    var querytext = "update pessoa set "; 
	    for(i=0; i< pessoavar.length; i++){
		if(pessoavar[i] == "associado?"){
		    querytext+= '"' + pessoavar[i]+ '"' + " = " + pessoa[pessoavar[i]] ;
		}else querytext+= pessoavar[i] + " = " + "'" + pessoa[pessoavar[i]] + "'" ;
		
		if(i < pessoavar.length-1) querytext += " , ";
	    }
	    querytext += " where id = " + pessoa.id + ";";
	    console.log(querytext);
	    var query = {
		// text:'update pessoa set ',
		text: querytext,
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
};

module.exports.updateTransacao = function(pessoa){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var pessoavar = Object.keys(pessoa);
	    var querytext = "update pessoa set "; 
	    for(i=0; i< pessoavar.length; i++){
		if(pessoavar[i] == "associado?"){
		    querytext+= '"' + pessoavar[i]+ '"' + " = " + pessoa[pessoavar[i]] ;
		}else querytext+= pessoavar[i] + " = " + "'" + pessoa[pessoavar[i]] + "'" ;
		
		if(i < pessoavar.length-1) querytext += " , ";
	    }
	    querytext += " where id = " + pessoa.id + ";";
	    console.log(querytext);
	    var query = {
		// text:'update pessoa set ',
		text: querytext,
	    }
	    client.query(query, (err, res) => {
		if(err){
		    reject(err);
		} else{
		    client.end();
		    resolve(res);
		}
	    });
	});
    });
};

// module.expoorts.selectCompraSum = function(callback, response){
//     fs.readFile(liquibase_properties, 'utf8', function (err, data) {
// 	if (err) throw err;
// 	
// 	var properties = JSON.parse(data.toString());
// 	var client = new Client(properties);
// 	client.connect();
// 	
// 	var query= {
// 	    text:'select sum(preco) from compra join produto on produto.id = compra.id_produto join preco on preco.id = produto.id_preco;',
// 	};
// 	client.query(query, (err, res) => {
// 	    if(err) throw(err);
// 	    callback(response, JSON.stringify(res));
// 	    client.end();
// 	});

//     });
// };

// module.exports.selectProdutosLivrosPreco = function(nome)
// select * from compra left join produto on produto.id=compra.id_produto left join livro on produto.id = livro.id_produto;
