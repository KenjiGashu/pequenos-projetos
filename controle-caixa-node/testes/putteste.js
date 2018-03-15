var https = require('http');
var querystring = require('querystring');
var buffer = require('buffer');

const postData = querystring.stringify({
    'msg': 'Hello World!'
});

const boject = {
    id: 1,
    nome: 'araujo',
    "associado?": true,
    cpf:  "83627162833",
    rg:  "827374859",
    telefone: '+55(11)987653782',
};

const data = JSON.stringify(boject);

const sera = JSON.parse(data);
console.log(Buffer.byteLength(data));


const options = {
    port: 10000,
    path: '/dbservice/pessoa/id/1',
    method: 'PUT',
    headers: {
	'Content-Type': 'application/json',
	'Content-Length': Buffer.byteLength(data)
    }
};

const req = https.request(options, (res) => {
    // console.log(`STATUS: ${res.statusCode}`);
    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    // res.setEncoding('utf8');
    // res.on('data', (chunk) => {
    // 	console.log(`BODY: ${chunk}`);
    // });
    // res.on('end', () => {
    // 	console.log('No more data in response.');
    // });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write( data);
req.end();
