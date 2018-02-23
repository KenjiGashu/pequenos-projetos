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
    if(requrl == "/oi"){
	console.log('teste do connect');
	database.testebd();
    }
    if(requrl != "/"){
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
