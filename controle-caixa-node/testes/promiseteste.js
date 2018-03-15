var http = require('http');
var fs = require('fs');
var database = require('../serverjs/database.js');
var url = require('url');
var msglogger = require('../serverjs/messagelogger.js');
var { Client, Pool } = require('pg');
var liquibase_properties = './resources/liquibase/liquibase-connection.properties';

var server = http.createServer( (req, res) => {
    oi("boku").then(function(data){
	var resp = JSON.stringify(data);
	return resp;
    },function(){
	console.log("error");
    })
	.then(function(data){
	    res.writeHead(200, {'content-type': 'application/json'});
	    res.end(data);
	},function(err){
	    console.log(err);
	    console.log('error do segundo promise');
	});
});

var chamaoi = function(titulo){
    
};

var oi = function(titulo){
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

server.listen(10000);
