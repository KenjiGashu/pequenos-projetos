var { Client, Pool } = require('pg');
var parser = require('./liquibase-parser.js');
var fs = require('fs');
var msglogger = require('./messagelogger.js');
var liquibase_properties = './resources/liquibase/liquibase-connection.properties';




module.exports.selectProdutosLivrosTitulo = function(titulo){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select livro.id as livro_id, produto.id as produto_id, * from livro, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.titulo=$1;",
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


module.exports.selectProdutosLivrosAutor = function(autor){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select livro.id as livro_id, produto.id as produto_id, * from livro, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.autor=$1;",
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

module.exports.selectProdutosLivrosEditora = function(editora){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select livro.id as livro_id, produto.id as produto_id, * from livro, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.editora=$1;",
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


module.exports.selectProdutosLivrosAll = function(){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select livro.id as livro_id, produto.id as produto_id, * from livro, produto, preco, estoque where estoque.produto_id = produto.id and livro.id_produto=produto.id and produto.id_preco = preco.id;",
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


module.exports.selectProdutosCdsTema = function(tema){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:"select cd.numero as cd_numero, produto.id as produto_id, * from cd, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = cd.id_produto and produto.id_preco = preco.id and cd.tema like $1;",
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

module.exports.selectProdutosCdsNumero = function(numero){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select cd.numero as cd_numero, produto.id as produto_id, * from cd, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = cd.id_produto and produto.id_preco = preco.id and cd.numero=$1;",
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

module.exports.selectProdutosCdsAll = function(){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select cd.numero as cd_numero, produto.id as produto_id, * from cd, produto, preco, estoque where estoque.produto_id=produto.id and produto.id = cd.id_produto and produto.id_preco = preco.id;",
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


module.exports.selectPessoaAll = function(){
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

module.exports.selectPessoaNome = function(nome){
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


module.exports.selectPessoaAssociado = function(associado){
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

module.exports.selectPessoaCpf = function(cpf){
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

module.exports.selectPessoaRg = function(rg){
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

module.exports.selectPessoaTelefone = function(telefone){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from pessoa where pessoa.telefone = $1;',
		values: [telefone],
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

module.exports.selectProdutosAll = function(){
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

module.exports.selectCompraAll = function(){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id;',
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

module.exports.selectCompraPessoaNome = function(nome){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.nome=$1;',
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



module.exports.selectCompraPessoaAssociado = function(associado){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa."associado?"=$1;',
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


module.exports.selectCompraPessoaCpf = function(cpf){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.cpf=$1;',
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

module.exports.selectCompraPessoaRg = function(rg){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.rg=$1;',
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

module.exports.selectCompraPessoaTelefone = function(telefone){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.telefone=$1;',
		values: [telefone],
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


module.exports.selectCompraProdutosLivrosAll = function(){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.id is not null;',
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

module.exports.selectCompraProdutosLivrosTitulo = function(titulo){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.titulo=$1;',
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

module.exports.selectCompraProdutosLivrosAutor = function(autor){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.autor=$1;',
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

module.exports.selectCompraProdutosLivrosEditora = function(editora){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.editora=$1;',
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

module.exports.selectCompraProdutosCdAll = function(){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero is not null;',
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


module.exports.selectCompraProdutosCdNumero = function(numero){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero=$1;',
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

module.exports.selectCompraProdutosCdTema = function(tema){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.tema=$1;',
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


module.exports.selectCompraSum = function(){
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


module.exports.updatecompraId = function(id){
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

module.exports.selectTransacaoAll = function(){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id;',
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

module.exports.selectTransacaoPessoaNome = function(nome){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.nome=$1;',
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



module.exports.selectTransacaoPessoaAssociado = function(associado){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa."associado?"=$1;',
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


module.exports.selectTransacaoPessoaCpf = function(cpf){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.cpf=$1;',
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

module.exports.selectTransacaoPessoaRg = function(rg){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.rg=$1;',
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

module.exports.selectTransacaoPessoaTelefone = function(telefone){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.telefone=$1;',
		values: [telefone],
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


module.exports.selectTransacaoProdutosLivrosAll = function(){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.id is not null;',
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

module.exports.selectTransacaoProdutosLivrosTitulo = function(titulo){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.titulo=$1;',
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

module.exports.selectTransacaoProdutosLivrosAutor = function(autor){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.autor=$1;',
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

module.exports.selectTransacaoProdutosLivrosEditora = function(editora){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.editora=$1;',
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

module.exports.selectTransacaoProdutosCdAll = function(){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero is not null;',
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


module.exports.selectTransacaoProdutosCdNumero = function(numero){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero=$1;',
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

module.exports.selectTransacaoProdutosCdTema = function(tema){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.tema=$1;',
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

module.exports.selectTransacaoDescricao = function(descricao){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao.descricao=$1;',
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

module.exports.selectTransacaoData = function(data){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao.data=$1;',
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

module.exports.selectTransacaoPrecos = function(preco){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao.valor=$1;',
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


module.exports.selectTransacaoSum = function(){
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
