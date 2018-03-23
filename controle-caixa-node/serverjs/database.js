var { Client, Pool } = require('pg');
var parser = require('./liquibase-parser.js');
var fs = require('fs');
var msglogger = require('./messagelogger.js');
var liquibase_properties = './resources/liquibase/liquibase-connection.properties';

module.exports.makeLivroException = function(value){
    this.value = value;
    this.message = " :: Erro ao criar o livro! Row recebida não possui os atributos necessários.";
    this.toString = function(){
	return this.value + this.message;
    };
};

module.exports.makePessoaException = function(value){
    this.value = value;
    this.message = " :: Erro ao criar a pessoa! Row recebida não possui os atributos necessários.";
    this.toString = function(){
	return this.value + this.message;
    };
};

module.exports.makeCdException = function(value){
    this.value = value;
    this.message = " :: Erro ao criar o cd! Row recebida não possui os atributos necessários.";
    this.toString = function(){
	return this.value + this.message;
    };
};

module.exports.makeCompraException = function(value){
    this.value = value;
    this.message = " :: Erro ao criar a compra! Row recebida não possui os atributos necessários.";
    this.toString = function(){
	return this.value + this.message;
    };
};

module.exports.makeTransacaoException = function(value){
    this.value = value;
    this.message = " :: Erro ao criar a transacao! Row recebida não possui os atributos necessários.";
    this.toString = function(){
	return this.value + this.message;
    };
};


module.exports.makeLivro = function(row){
    var livro = {};
    try{
	livro.livro_id = row.livro_id;
	livro.titulo = row.titulo;
	livro.autor = row.autor;
	livro.editora = row.editora;
	livro.id_produto = row.id_produto;
    } catch (e){
	throw new module.exports.makeLivroException(e);
    }
    return livro;
    
};

module.exports.makeCd = function(row){
    var cd = {};
    try{
	cd.numero = row.numero;
	cd.tema = row.tema;
	cd.numero_new = row.numero_new ? row.numero_new : -1;
	cd.id_produto = row.id_produto;
    } catch (e){
	throw new module.exports.makeCdException(e);
    }
    return cd;
    
};

module.exports.makePessoa = function(row){
    var pessoa = {};
    try{
	pessoa.id = row.id;
	pessoa.nome = row.nome;
	pessoa["associado?"] = row["associado?"];
	pessoa.cpf = row.cpf;
	pessoa.rg = row.rg;
	pessoa.telefone = row.telefone;
    } catch (e){
	throw new module.exports.makePessoaException(e);
    }
    return pessoa;
    
};

module.exports.makeCompra = function(row){
    var compra = {};
    try{
	compra.compra_id = row.compra_id;
	compra.id_produto = row.id_produto;
	compra.id_pessoa = row.id_pessoa;
	compra.data = new Date(row.data);
    } catch (e){
	throw new module.exports.makeCompraException(e);
    }
    return compra;
    
};

module.exports.makeTransacao = function(row){
    var transacao = {};
    try{
	transacao.transacao_id = row.transacao_id;
	transacao.valor = row.valor;
	transacao.descricao = row.descricao;
	transacao.id_pessoa = row.id_pessoa;
	transacao.id_produto = row.id_produto;
	transacao.data = new Date(row.data);
    } catch (e){
	throw new module.exports.makeTransacaoException(e);
    }
    return transacao;
};

module.exports.selectProdutosLivrosId = function(id){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text: "select livro.id as livro_id, produto.id as produto_id, preco.id as preco_id, * from livro, produto, preco, estoque where estoque.id_produto=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.id = $1;",
		values: [id],
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


module.exports.selectProdutosLivrosTitulo = function(titulo){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    titulo = '%' + titulo + '%';
	    var query = {
		text: "select livro.id as livro_id, produto.id as produto_id, preco.id as preco_id, * from livro, produto, preco, estoque where estoque.id_produto=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.titulo like $1;",
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
	    autor = '%' + autor + '%';
	    var query = {
		text: "select livro.id as livro_id, produto.id as produto_id, preco.id as preco_id, * from livro, produto, preco, estoque where estoque.id_produto=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.autor like $1;",
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
	    editora = '%' + editora + '%';
	    var query = {
		text: "select livro.id as livro_id, produto.id as produto_id, preco.id as preco_id, * from livro, produto, preco, estoque where estoque.id_produto=produto.id and produto.id = livro.id_produto and produto.id_preco = preco.id and livro.editora like $1;",
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
		text: "select livro.id as livro_id, produto.id as produto_id, preco.id as preco_id, * from livro, produto, preco, estoque where estoque.id_produto = produto.id and livro.id_produto=produto.id and produto.id_preco = preco.id;",
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
	    tema = '%' + tema + '%';
	    var query = {
		text:"select cd.numero as cd_numero, produto.id as produto_id, preco.id as preco_id, * from cd, produto, preco, estoque where estoque.id_produto=produto.id and produto.id = cd.id_produto and produto.id_preco = preco.id and cd.tema like $1;",
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
		text: "select cd.numero as cd_numero, produto.id as produto_id, preco.id as preco_id, * from cd, produto, preco, estoque where estoque.id_produto=produto.id and produto.id = cd.id_produto and produto.id_preco = preco.id and cd.numero=$1;",
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
		text: "select cd.numero as cd_numero, produto.id as produto_id, preco.id as preco_id, * from cd, produto, preco, estoque where estoque.id_produto=produto.id and produto.id = cd.id_produto and produto.id_preco = preco.id;",
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

module.exports.selectPessoaId = function(id){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select * from pessoa where pessoa."id" = $1;',
		values: [id],
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
	    nome = '%' + nome + '%';
	    var query = {
		text:'select * from pessoa where nome like $1;',
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
	    cpf = '%' + cpf + '%';
	    var query = {
		text:'select * from pessoa where pessoa.cpf like $1;',
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
	    rg = '%' + rg + '%';
	    var query = {
		text:'select * from pessoa where pessoa.rg like $1;',
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
	    telefone = '%' + telefone + '%';
	    var query = {
		text:'select * from pessoa where pessoa.telefone like $1;',
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


module.exports.selectCompraId = function(id){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where compra.id = $1',
		values: [id],
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
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id;',
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


module.exports.selectCompraPessoasId = function(id){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa."id"=$1;',
		values: [id],
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
	    nome = '%' + nome + '%';
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.nome like $1;',
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
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa."associado?"=$1;',
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
	    cpf = '%' + cpf + '%';
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.cpf like $1;',
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
	    rg = '%' + rg + '%';
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.rg like $1;',
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
	    telefone = '%' + telefone + '%';
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.telefone like $1;',
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


module.exports.selectCompraProdutosLivrosId = function(id){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.id = $1;',
		values: [id],
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
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.id is not null;',
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
	    titulo = '%' + titulo + '%';
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.titulo like $1;',
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
	    autor = '%' + autor + '%';
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.autor like $1;',
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
	    editora = '%' + editora + '%';
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.editora like $1;',
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
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero is not null;',
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
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero=$1;',
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
	    tema = '%' + tema + '%';
	    var query = {
		text:'select compra.id as compra_id, livro.id as livro_id, pessoa.id as pessoa_id, preco.id as preco_id, * from compra join produto on produto.id = compra.id_produto left join livro on livro.id_produto = compra.id_produto left join cd on cd.id_produto = compra.id_produto join pessoa on compra.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.tema like $1;',
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


module.exports.selectTransacaoId = function(id){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao."id"=$1;',
		values: [id],
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
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id;',
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

module.exports.selectTransacaoPessoasId = function(id){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.id = $1;',
		values: [id],
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
	    nome = '%' + nome + '%';
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.nome like $1;',
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
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa."associado?"=$1;',
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
	    cpf = '%' + cpf + '%';
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.cpf like $1;',
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
	    rg = '%' + rg + '%';
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.rg like $1;',
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
	    telefone = '%' + telefone + '%';
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where pessoa.telefone like $1;',
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


module.exports.selectTransacaoProdutosLivrosId = function(id){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.id = $1;',
		values: [id],
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
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.id is not null;',
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
	    titulo = '%' + titulo + '%';
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.titulo like $1;',
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
	    autor = '%' + autor + '%';
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.autor like $1;',
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
	    editora = '%' + editora + '%';
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where livro.editora like $1;',
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
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero is not null;',
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
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.numero=$1;',
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
	    tema = '%' + tema + '%';
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where cd.tema like $1;',
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
	    descricao = '%' + descricao + '%';
	    var query = {
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao.descricao like $1;',
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
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao.data=$1;',
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
		text:'select transacao.id as transacao_id, pessoa.id as pessoa_id, livro.id as livro_id, cd.numero as cd_numero, preco.id as preco_id, * from transacao join produto on produto.id = transacao.id_produto left join livro on livro.id_produto = transacao.id_produto left join cd on cd.id_produto = transacao.id_produto join pessoa on transacao.id_pessoa = pessoa.id join preco on produto.id_preco = preco.id where transacao.valor=$1;',
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
	    var querytext = 'update pessoa set nome = $2, "associado?" = $3, cpf = $4, rg = $5, telefone = $6 where id = $1; ';
	    var values = [];
	    values.push(pessoa.id);
	    values.push(pessoa.nome);
	    values.push(pessoa["associado?"]);
	    values.push(pessoa.cpf);
	    values.push(pessoa.rg);
	    values.push(pessoa.telefone);

	    var query = {
		text: querytext,
		values: values,
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
	    
	    var values = [];

	    values.push(livro.livro_id);
	    values.push(livro.titulo);
	    values.push(livro.autor);
	    values.push(livro.editora);

	    var querytext = "update livro set titulo = $2, autor = $3, editora = $4 where livro.id = $1; "; 
	    var query = {
		text: querytext,
		values: values
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

module.exports.updateCd = function(cd){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    var values = [];
	    console.log(cd);
	    var querytext = "update cd set numero = $3, tema = $2 where numero = $1; "; 
	    values.push(cd.numero);
	    values.push(cd.tema);
	    values.push(cd.numero_new);
	    var query = {
		text: querytext,
		values: values
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

module.exports.updateCompra = function(compra){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    // var compravar = Object.keys(compra);
	    var querytext = "update compra set data = $2 where id = $1";
	    var values = [];
	    values.push(compra.compra_id);
	    values.push(compra.data);
	    // for(i=0; i< compravar.length; i++){
	    // 	values.push(compra[compravar[i]]);
	    // }
	    var query = {
		text: querytext,
		values: values
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

module.exports.updatePreco = function(preco){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    // var precovar = Object.keys(preco);
	    var values = [];
	    var querytext = "update preco set preco = $2, data_inicio = $3, data_fim = $4 where id = $1; ";
	    values.push(preco.preco_id);
	    values.push(preco.preco);
	    values.push(preco.data_inicio);
	    values.push(preco.data_fim);
	    // for(i=0; i< precovar.length; i++){
	    // 	values.push(preco[precovar[i]]);
	    // }
	    var query = {
		text: querytext,
		values: values
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

module.exports.updateTransacao = function(transacao){
    return new Promise(function(resolve, reject){
	fs.readFile(liquibase_properties, 'utf8', function (err, data) {
	    if (err) reject(err);
	    var properties = JSON.parse(data.toString());
	    var client = new Client(properties);
	    client.connect();
	    // var transacaovar = Object.keys(transacao);
	    var querytext = "update transacao set valor = $2, descricao = $3, data = $4 where id = $1;";
	    values.push(transacao.transacao_id);
	    values.push(transacao.valor);
	    values.push(transacao.descricao);
	    values.push(transacao.data);
	    // for(i=0; i< transacaovar.length; i++){
	    // 	values.push(transacao[transacaovar[i]]);
	    // }
	    var query = {
		text: querytext,
		values: values
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
