var express = require('express');
var router = express.Router();
var db = require('./database.js');
var body_parser = require('body-parser');

router.route('/dbservice/livro/titulo/:titulo')
    .get( function(req, res){
	db.selectProdutosLivrosTitulo(req.params.titulo).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });


router.route('/dbservice/livro/id/:id')
    .put(function(req, res){
	console.log(req);
    })
    .delete(function(req, res){
	console.log(req);
    });

router.route('/dbservice/livro/livro/:livro').post(function(req, res) {
    console.log(req);
});

router.route('/dbservice/livro/autor/:autor')
    .get(function(req, res){
	db.selectProdutosLivrosAutor(req.params.autor).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/livro/editora/:editora')
    .get(function(req, res){
	db.selectProdutosLivrosEditora(req.params.editora).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/livro/all')
    .get(function(req, res){
	db.selectProdutosLivrosAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/cd/all')
    .get(function(req, res){
	db.selectProdutosCdsAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/cd/tema/:tema')
    .get(function(req, res){
	db.selectProdutosCdsTema(req.params.tema).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/cd/numero/:numero')
    .get(function(req, res){
	db.selectProdutosCdsNumero(req.params.numero).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/pessoa/nome/:nome')
    .get(function(req, res){
	db.selectPessoaNome(req.params.nome).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/pessoa/id/:id')
    .put(function(req, res){
	var body = req.body;
	db.updatePessoa(req.body).then(function(data){
	    console.log(data);
	    res.writeHead(200);
	    res.end();
	}, function(error){
	    console.log(error);
	    res.writeHead(400);
	    res.end();
	});
    });

router.route('/dbservice/pessoa/associado/:associado')
    .get(function(req, res){
	db.selectPessoaAssociado(req.params.associado).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/pessoa/cpf/:cpf')
    .get(function(req, res){
	db.selectPessoaCpf(req.params.cpf).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/pessoa/rg/:rg')
    .get(function(req, res){
	db.selectPessoaRg(req.params.rg).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/pessoa/all')
    .get(function(req, res){
	db.selectPessoaAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });


router.route('/dbservice/compra/all')
    .get(function(req, res){
	db.selectCompraAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/pessoa/all')
    .get(function(req, res){
	db.selectCompraPessoaAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/pessoa/nome/:nome')
    .get(function(req, res){
	db.selectCompraPessoaNome(req.params.nome).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/pessoa/associado/:associado')
    .get(function(req, res){
	db.selectCompraPessoaAssociado(req.params.associado).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/pessoa/cpf/:cpf')
    .get(function(req, res){
	db.selectCompraPessoaCpf(req.params.cpf).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/pessoa/rg/:rg')
    .get(function(req, res){
	db.selectCompraPessoaRg(req.params.rg).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/livro/all')
    .get(function(req, res){
	db.selectCompraProdutosLivrosAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/livro/titulo/:titulo')
    .get(function(req, res){
	db.selectCompraProdutosLivrosTitulo(req.params.titulo).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/livro/autor/:autor')
    .get(function(req, res){
	db.selectCompraProdutosLivrosAutor(req.params.autor).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/livro/editora/:editora')
    .get(function(req, res){
	db.selectCompraProdutosLivrosEditora(req.params.editora).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/cd/all')
    .get(function(req, res){
	db.selectCompraProdutosCdAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/cd/numero/:numero')
    .get(function(req, res){
	db.selectCompraProdutosCdNumero(req.params.numero).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/cd/tema/:tema')
    .get(function(req, res){
	db.selectCompraProdutosCdTema(req.params.tema).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/compra/soma/preco')
    .get(function(req, res){
	db.selectCompraSum().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });


router.route('/dbservice/transacao/all')
    .get(function(req, res){
	db.selectTransacaoAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/pessoa/nome/:nome')
    .get(function(req, res){
	db.selectTransacaoPessoaNome(req.params.nome).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	}); 
    });

router.route('/dbservice/transacao/pessoa/associado/:associado')
    .get(function(req, res){
	db.selectTransacaoPessoaAssociado(req.params.associado).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/pessoa/cpf/:cpf')
    .get(function(req, res){
	db.selectTransacaoPessoaAssociado(req.params.cpf).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/pessoa/rg/:rg')
    .get(function(req, res){
	db.selectTransacaoPessoaRg(req.params.rg).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/livro/all')
    .get(function(req, res){
	db.selectTransacaoProdutosLivrosAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/livro/titulo/:titulo')
    .get(function(req, res){
	db.selectTransacaoProdutosLivrosTitulo(req.params.titulo).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/livro/autor/:autor')
    .get(function(req, res){
	db.selectTransacaoProdutosLivrosAutor(req.params.autor).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/livro/editora/:editora')
    .get(function(req, res){
	db.selectTransacaoProdutosLivrosEditora(req.params.editora).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/cd/all')
    .get(function(req, res){
	db.selectTransacaoProdutosCdAll().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/cd/numero/:numero')
    .get(function(req, res){
	db.selectTransacaoProdutosCdNumero(req.params.numero).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/cd/tema/:tema')
    .get(function(req, res){
	db.selectTransacaoProdutosCdTema(req.params.tema).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/soma/preco')
    .get(function(req, res){
	db.selectTransacaoSum().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/preco/:preco')
    .get(function(req, res){
	db.selectTransacaoPrecos(req.params.preco).then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/descricao/:descricao')
    .get(function(req, res){
	db.selectTransacaoDescricao( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });

router.route('/dbservice/transacao/data/:data')
    .get(function(req, res){
	db.selectTransacaoData().then( (data) => {
	    res.send(data);
	}, (error) => {
	    res.send(error);
	});
    });






module.exports = router;


// var db = require('./database.js');
// var tokens;

// module.exports.parsePath = function(str){
//     tokens = str.split('/');
//     if(tokens[1]){
// 	var token = tokens[1];
// 	tokens = tokens.splice(0, 2);
// 	switch(tokens[1]){
// 	case 'dbservice': return dbserviceToken(tokens);
// 	default: return getFile(str);
// 	}
//     } else {
// 	return null;
//     }
// };

// var getFile(requrl){
//     filename = '.' + requrl;
//     fs.readFile(filename, (err, data) => {
// 	if(err){
// 	    msglogger.tratarmsg(err, msglogger.debug);
// 	} else{
// 	    var str = requrl.split('.');
// 	    var ext = str[str.length-1];
// 	    res.writeHead(200, {'Content-Type': 'text/'+ext});
// 	    res.end(data);
// 	}
//     });
// };


// var dbserviceToken = function(tokens){
//     var token = tokens[0];
//     tokens = tokens.splice(0, 1);
//     switch(token){
//     case 'insert': return oi;
//     case 'select': return selectDataToken(tokens);
//     case 'update':
//     case 'delete':
//     }
// };

// var selectDataToken = function(tokens){
//     var token = tokens[0];
//     tokens = tokens.splice(0, 1);
//     switch(token){
//     case 'compra': return selectCompraTypeToken(tokens);
//     case 'produto':
//     case 'cd':
//     case 'pessoa':
//     case 'livro':
//     }
// };

// var selectCompraTypeToken = function(tokens){
//     var token = tokens[0];
//     tokens = tokens.splice(0, 1);
//     switch(token){
//     case 'all': 
//     case ''
//     }
// }

// var compraAll(){
//     return new Promisse(function(resolve, reject){

//     });
// }

// var selectArgToken = function(tokens){
//     var token = tokens[0];
//     tokens = tokens.splice(0, 1);

// }

