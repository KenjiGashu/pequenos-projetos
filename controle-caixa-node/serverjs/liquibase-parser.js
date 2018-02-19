var fs = require('fs');

//
// recebe um arquivo liquibase.properties (o buffer do arquivo) e transforma em objeto
// as propriedades do objeto sao as propriedades do arquivo.
// database=bd_chinelo se tranforma em {database: 'bd_chinelo'}
//
// voce chama esse maldito com
// fs.readFile(filename, (objeto-retornado) => {
//    //faz alguma coisa com o objeto
// });
//
module.exports.parseLiquibase = function(filebuf, callback){
    var resp = {};

    var str = filebuf.toString();
    var linhas = str.split("\n");
    for(i=0; i< linhas.length; i++){
	if(linhas[i] == undefined) console.log('deu undefined');
	var atributo = linhas[i].split('=');
	resp[atributo[0]] = atributo[1];

    }
    callback(resp);
};
