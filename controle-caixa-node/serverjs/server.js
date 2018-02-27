var http = require('http');
var fs = require('fs');
var database = require('./database.js');
var url = require('url');



var server = http.createServer( (req, res) => {
    var objurl = url.parse(req.url);
    console.log(objurl);
    // console.log(req.headers);
    var filename = 'index.html';
    var requrl = objurl.pathname;
    


    // tratando request de banco de dados
    if(objurl.pathname == "/dbservice/"){
	// extract query
	var quer = objurl.query;
	var args = quer.toString().split('=');
	
	var callbackResponse = function(res, data){
	    res.writeHead(200, {'content-type': 'application/json'});
	    res.end(data);
	};

	// database.selectPessoa('araujo');
 	database.selectProdutosLivros(callbackResponse, res);
	database.selectProdutosCds(callbackResponse, res);
	return;
    }
    else if(requrl != "/"){
	filename = '.' + requrl;
	fs.readFile(filename, (err, data) => {
	    if(err){
		console.log(err);
	    } else{
		var str = requrl.split('.');
		var ext = str[str.length-1];
		res.writeHead(200, {'Content-Type': 'text/'+ext});
		res.end(data);
	    }
	});
    }


});

server.listen(4200);
