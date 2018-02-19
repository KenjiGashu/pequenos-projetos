var { Client, Pool } = require('pg');
var parser = require('./liquibase-parser.js');
var fs = require('fs');


module.exports.testebd = function(){
    var obj;
    fs.readFile('./resources/liquibase/liquibase-connection.properties', 'utf8', function (err, data) {
	if (err) throw err;
	var properties = JSON.parse(data.toString());
	var client = new Client(properties);
	client.connect();
	client.query('SELECT NOW()', (err, res) => {
	    console.log(err, res);
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
