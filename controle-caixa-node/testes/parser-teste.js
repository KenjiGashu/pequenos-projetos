var parser = require('../liquibase-parser.js');
var fs = require('fs');

var oi = {};
fs.readFile('./resources/liquibase/liquibase.properties', 'utf8', function (err, data) {
    if (err) throw err;
    parser.parseLiquibase(data.toString(), (resp) => {
	
	if (err) throw err;
	console.log(resp);
	
    });
});

