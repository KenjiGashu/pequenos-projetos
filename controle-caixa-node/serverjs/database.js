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
	    console.log(err, res.rows[0].oi);
	    client.end();
	});

	
	
	// parser.parseLiquibase(data.toString(), (properties) => {
	//     console.log(properties);
	//     // var client = new Client(properties);
	//     var client = new Client({
	// 	user: 'pe_de_chinelo',
	// 	host: 'localhost',
	// 	database: 'bd_chinelo',
	// 	password: '',
	// 	port: 5432,
	//     })
	//     client.connect();

	//     client.query('SELECT NOW()', (err, res) => {
	// 	console.log(err, res);
	// 	client.end();
	//     })
	// });
    });
};

module.exports.selectPessoa = function(nome){
    fs.readFile('./resources/liquibase/liquibase-connection.properties', 'utf8', function (err, data) {
	if (err) throw err;
	var properties = JSON.parse(data.toString());
	var client = new Client(properties);
	client.connect();
	client.query('SELECT * FROM PESSOA', (err, res) => {
	    console.log(err, res);
	    client.end();
	});
    });
    
}
module.exports.selectProduto = function(){
    
}
