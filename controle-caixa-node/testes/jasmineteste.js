


describe("database", function(){
    var db = require('../serverjs/database.js');

    describe("quando voce procuro por um livro chamado 'o primeiro livro' no banco de dados atraves do titulo", function(){
	var nomedolivro = 'o primeiro livro';
	var calbeck = function(res, data){
	    console.log(data);
	    return data;
	};

	it("deve retornar um valor ", function(){
	    expect(db.selectProdutosLivrosTitulo(nomedolivro, calbeck, undefined)).not.toEqual(undefined);
	});

	it("deve retornar o livro 'o primeiro livro' ", function(){
	    expect(db.selectProdutosLivrosTitulo(nomedolivro, calbeck, undefined)).toEqual('o primeiro livro');
	});
    });

});
