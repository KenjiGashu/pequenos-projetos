var http = require('http');
var fs = require('fs');
var database = require('./database.js');
var url = require('url');
var msglogger = require('./messagelogger.js');
var rotas = require('./routes.js');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');


// arguments
if(process.argv.length>1){
    for(i=0; i< process.argv.length; i++){
	switch(process.argv[i]){
	case '-d':
	    console.log('debug mode enabled');
	    msglogger.debug=true;
	    break;
	}
    }
}

var app = express();
app.use(bodyParser.json());

app.use(express.static('telas'));
app.use(express.static('node_modules'));
app.use(express.static('fonts'));
app.use(morgan('combined'));
// app.use('/', function(req, res, next){
//     console.log('oi'  + req);
//     next();
// });


app.use('/', rotas);

app.listen(10000, function(){
});


// var server = http.createServer( (req, res) => {
//     var objurl = url.parse(req.url);
//     console.log(objurl);
//     // console.log(req.headers);
//     var filename = 'index.html';
//     var requrl = objurl.pathname;
    


//     // tratando request de banco de dados
//     if(objurl.pathname.includes("/dbservice/")){
// 	msglogger.tratarmsg('feito request ao banco de dados', msglogger.debug);
	
// 	// extract query
// 	var path = objurl.pathname;
// 	var pathsplit = path.split("/");
// 	if(pathsplit.length > 4){
// 	    var search = pathsplit[4].replace(new RegExp('%20', 'g'), " "); //troca os %20
// 	}
	
// 	var callbackResponse = function(res, data){
// 	    res.writeHead(200, {'content-type': 'application/json'});
// 	    res.end(data);
// 	};

// 	switch(pathsplit[2]){
// 	case 'select':
// 	case 'update':
// 	case 'delete':
// 	case 'insert':
	    
// 	}
// 	switch(pathsplit[3]){
// 	case 'soma': database.selectCompraSum(callbackResponse, res); break;
// 	case 'cd':
// 	    switch(pathsplit[4]){
// 	    case 'all': database.selectProdutosCdsAll(callbackResponse, res); break;
// 	    case 'numero': database.selectProdutosCdsNumero(pathsplit[5], callbackResponse, res); break;
// 	    case 'tema': database.selectProdutosCdsTema(pathsplit[5], callbackResponse, res);break;
// 	    }
// 	    break;
// 	case 'livro':
// 	    switch(pathsplit[4]){
// 	    case 'all': database.selectProdutosLivrosAll(callbackResponse, res); break;
// 	    case 'titulo': database.selectProdutosLivrosTitulo(pathsplit[5], callbackResponse, res);break;
// 	    case 'autor': database.selectProdutosLivrosAutor(pathsplit[5], callbackResponse, res);break;
// 	    case 'editora':database.selectProdutosLivrosEditora(pathsplit[5], callbackResponse, res);break;
// 	    }
// 	    break;
// 	case 'pessoa':
// 	    switch(pathsplit[4]){
// 	    case 'all': database.selectPessoaAll(callbackResponse, res);break;
// 	    case 'nome': database.selectPessoaNome(pathsplit[5], callbackResponse, res);break;
// 	    case 'associado': database.selectPessoaAssociado(pathsplit[5], callbackResponse, res);break;
// 	    case 'cpf': database.selectPessoaCpf(pathsplit[5], callbackResponse, res);break;
// 	    case 'rg': database.selectPessoaRg(pathsplit[5], callbackResponse, res);break;
// 	    }
// 	    break;
// 	case 'compra':
// 	    switch(pathsplit[4]){
// 	    case 'all': database.selectCompraAll(callbackResponse, res); break;

// 	    case 'pessoa':
// 		switch(pathsplit[5]){
// 		case 'nome': database.selectCompraPessoaNome(pathsplit[6], callbackResponse, res);break;
// 		case 'associado': database.selectCompraPessoaAssociado(pathsplit[6], callbackResponse, res);break;
// 		case 'cpf': database.selectCompraPessoaCpf(pathsplit[6], callbackResponse, res);break;
// 		case 'rg': database.selectCompraPessoaRg(pathsplit[6], callbackResponse, res);break;
// 		}
// 		break;

// 	    case 'livro':
// 		switch(pathsplit[5]){
// 		case 'all': database.selectCompraProdutosLivrosAll(callbackResponse, res); break;
// 		case 'titulo': database.selectCompraProdutosLivrosTitulo(pathsplit[6], callbackResponse, res);break;
// 		case 'autor': database.selectCompraProdutosLivrosAutor(pathsplit[6], callbackResponse, res);break;
// 		case 'editora':database.selectCompraProdutosLivrosEditora(pathsplit[6], callbackResponse, res);break;
// 		}
// 		break;
		
// 	    case 'cd':
// 		switch(pathsplit[5]){
// 		case 'all': database.selectCompraProdutosCdsAll(callbackResponse, res); break;
// 		case 'numero': database.selectCompraProdutosCdsNumero(pathsplit[6], callbackResponse, res); break;
// 		case 'tema': database.selectCompraProdutosCdsTema(pathsplit[6], callbackResponse, res);break;
// 		}
// 		break;
// 	    }
// 	    break;
// 	case 'produto':
// 	    switch(pathsplit[4]){
// 	    case 'all':
// 	    case 'numero':
// 	    case 'livro':
// 	    case 'cd':
// 	    }
// 	    break;
	    
// 	}
	
	


// 	//database.testebd();
// 	// database.selectPessoa('araujo');
//  	//database.selectProdutosLivrosAll(callbackResponse, res);
// 	//database.selectProdutosCds(pathsplit[3],callbackResponse, res);
// 	return;
//     }
//     else if(requrl != "/"){
// 	filename = '.' + requrl;
// 	fs.readFile(filename, (err, data) => {
// 	    if(err){
// 		msglogger.tratarmsg(err, msglogger.debug);
// 	    } else{
// 		var str = requrl.split('.');
// 		var ext = str[str.length-1];
// 		res.writeHead(200, {'Content-Type': 'text/'+ext});
// 		res.end(data);
// 	    }
// 	});
//     }


// });

// server.listen(4200);
