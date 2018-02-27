var { Client, Pool } = require('pg');
var parser = require('./liquibase-parser.js');
var fs = require('fs');


module.exports.testebd = function(){
    var obj;
    fs.readFile('./resources/liquibase/liquibase-connection.properties', 'utf8', function (err, data) {
	if (err) throw err;
	console.log('conseguiu ler o arquivo');
	var properties = JSON.parse(data.toString());
	var client = new Client(properties);
	client.connect();
	console.log('passou do connect');
	var query3 = '\conninfo';
	var query2 = "SELECT * "+
	    "FROM information_schema.tables ;";
	var query = "SELECT table_name as oi "+
	    "FROM information_schema.tables "+
	    "WHERE table_schema='public' "+
	    "AND table_type='BASE TABLE';";
	client.query(query, (err, res) => {
	    if(err) console.log(err);
	    var str = res.rows[0].oi;
	    console.log(str);
	    client.end();
	});

    });
};

module.exports.selectPessoa = function(nome, callback, response){
    fs.readFile('./resources/liquibase/liquibase-connection.properties', 'utf8', function (err, data) {
	if (err) throw err;
	console.log('conseguiu ler o arquivo');
	var properties = JSON.parse(data.toString());
	var client = new Client(properties);
	client.connect();
	console.log('passou do connect');
	var query= {
	    text:'select * from pessoa where nome = $1;',
	    values: [nome],
	};
	client.query(query, (err, res) => {
	    if(err) console.log(err);
	    callback(response, res);
	    client.end();
	});

    });
}



module.exports.selectProdutosLivros = function(nome){
    fs.readFile('./resources/liquibase/liquibase-connection.properties', 'utf8', function (err, data) {
	if (err) throw err;
	console.log('conseguiu ler o arquivo');
	var properties = JSON.parse(data.toString());
	var client = new Client(properties);
	client.connect();
	console.log('passou do connect');
	var query= {
	    text:'select * from produto, livro where produto.id = id_produto;',
	};
	client.query(query, (err, res) => {
	    if(err) console.log(err);
	    callback(response, res);
	    client.end();
	});

    });
}


module.exports.selectProdutosCds = function(nome){
    fs.readFile('./resources/liquibase/liquibase-connection.properties', 'utf8', function (err, data) {
	if (err) throw err;
	console.log('conseguiu ler o arquivo');
	var properties = JSON.parse(data.toString());
	var client = new Client(properties);
	client.connect();
	console.log('passou do connect');
	var query= {
	    text:'select * from produto, cd where produto.id = id_produto;',
	};
	client.query(query, (err, res) => {
	    if(err) console.log(err);
	    callback(response, res);
	    client.end();
	});

    });
}

