describe("database", function(){
    var db = require('../serverjs/database.js');

    

    //=======================================================================================
    //=================================         pessoas           ============================
    //========================================================================================


    describe(" - selectPessoaAll - quando vc dar um select em todas as pessoas", function(){
	it('Deve retornar uma lista de pessoas', function(done) {
	    db.selectPessoaAll().then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].nome).not.toBe(undefined);
		}
		done();
	    });
	});
    });

    describe(" - selectPessoaNome - quando voce seleciona pessoa 'ruju'", function(){
	it("deve retornar todas as pessoas 'ruju'", function(done){
	    db.selectPessoaNome('ruju').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].nome).toBe('ruju');
		}
		done();
	    });
	});
    });

    describe(" - selectPessoaAssociado - quando voce seleciona pessoas associadas", function(){
    	it("deve retornar todas as pessoas associadas", function(done){
    	    db.selectPessoaAssociado(true).then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i]['associado?']).toBe(true);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectPessoaCpf - quando voce seleciona  pessoa de cpf '1726352512'", function(){
	it("deve retornar todas as pessoas de cpf '1726352512'", function(done){
	    db.selectPessoaCpf('1726352512').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].cpf).toBe('1726352512');
		}
		done();
	    });
	});
    });

    describe(" - selectPessoaRg - quando voce seleciona  pessoa de rg '264758371'", function(){
	it("deve retornar todas as pessoas de rg '264758371'", function(done){
	    db.selectPessoaRg('264758371').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].rg).toBe('264758371');
		}
		done();
	    });
	});
    });

    describe(" - selectPessoaTelefone - quando voce seleciona pessoa de telefone '+55(11)987653782'", function(){
	it("deve retornar todas as pessoas de telefone '+55(11)987653782'", function(done){
	    db.selectPessoaTelefone('+55(11)987653782').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].telefone).toBe('+55(11)987653782');
		}
		done();
	    });
	});
    });


    //=======================================================================================
    //=================================         produtos           ============================
    //========================================================================================

    describe(" - selectProdutosLivrosAll - quando voce seleciona todos  os livros", function(){
	it("deve retornar todos os livros", function(done){
	    db.selectProdutosLivrosAll().then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].titulo).not.toBe(undefined);
		}
		done();
	    });
	});
    });

    describe(" - selectProdutosCdsAll - quando voce seleciona todos  os cds", function(){
	it("deve retornar todos os cds", function(done){
	    db.selectProdutosCdsAll().then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].numero).not.toBe(undefined);
		}
		done();
	    });
	});
    });

    describe(" - selectProdutosLivrosTitulo - quando voce seleciona todos  livros de titulo 'nanda kore'", function(){
	it("deve retornar todos os livros de titulo 'nanda kore'", function(done){
	    db.selectProdutosLivrosTitulo('nanda kore').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].titulo).toBe('nanda kore');
		}
		done();
	    });
	});
    });

    describe(" - selectProdutosLivrosAutor - quando voce seleciona todos  livros de autor 'tetsushi'", function(){
	it("deve retornar todos os livros de autor 'tetsushi'", function(done){
	    db.selectProdutosLivrosAutor('tetsushi').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].autor).toBe('tetsushi');
		}
		done();
	    });
	});
    });

    describe(" - selectProdutosLivrosEditora - quando voce seleciona todos  livros de editora 'enfim, sera?'", function(){
	it("deve retornar todos os livros de editora 'enfim, sera?'", function(done){
	    db.selectProdutosLivrosEditora('enfim, sera?').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].editora).toBe('enfim, sera?');
		}
		done();
	    });
	});
    });

    describe(" - selectProdutosCdsNumero - quando voce seleciona todos  cds de numero 92", function(){
	it("deve retornar todos os cds de numero 92", function(done){
	    db.selectProdutosCdsNumero(92).then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].numero).toBe(92);
		}
		done();
	    });
	});
    });

    describe(" - selectProdutosCdsTema - quando voce seleciona todos  cds de tema 'sem topo nao tem bottom'", function(){
	it("deve retornar todos os cds de tema 'sem topo nao tem bottom'", function(done){
	    db.selectProdutosCdsTema('sem topo nao tem bottom').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].tema).toBe('sem topo nao tem bottom');
		}
		done();
	    });
	});
    });

    
    
    
    //=======================================================================================
    //=================================         compras           ============================
    //========================================================================================

    describe(" - selectCompraAll - quando vc dar um select em todas as compras", function(){
	it('Deve retornar uma lista de compras de 23 compras', function(done) {
	    db.selectCompraAll().then(function(result) {
		expect(result.rows.length).toBe(23);
		done();
	    });
	});
    });

    describe(" - selectCompraPessoaNome - quando voce seleciona compra da pessoa 'ruju'", function(){
	it("deve retornar todas as compras feitas por 'ruju", function(done){
	    db.selectCompraPessoaNome('ruju').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].nome).toBe('ruju');
		}
		done();
	    });
	});
    });

    
    describe(" - selectCompraPessoaAssociado - quando voce seleciona compra de pessoas associadas", function(){
    	it("deve retornar todas as compras feitas por pessoas associadas", function(done){
    	    db.selectCompraPessoaAssociado(true).then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i]['associado?']).toBe(true);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectCompraPessoaCpf - quando voce seleciona compra da pessoa de cpf '1726352512'", function(){
	it("deve retornar todas as compras feitas por uma pessoa de cpf '1726352512'", function(done){
	    db.selectCompraPessoaCpf('1726352512').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].cpf).toBe('1726352512');
		}
		done();
	    });
	});
    });

    describe(" - selectCompraPessoaRg - quando voce seleciona compra da pessoa de rg '1726352512'", function(){
	it("deve retornar todas as compras feitas por uma pessoa de rg '1726352512'", function(done){
	    db.selectCompraPessoaRg('1726352512').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].rg).toBe('1726352512');
		}
		done();
	    });
	});
    });

    describe(" - selectCompraPessoaTelefone - quando voce seleciona compra da pessoa de telefone '+55(11)987653782'", function(){
	it("deve retornar todas as compras feitas por uma pessoa de telefone '+55(11)987653782'", function(done){
	    db.selectCompraPessoaTelefone('+55(11)987653782').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].telefone).toBe('+55(11)987653782');
		}
		done();
	    });
	});
    });

    describe(" - selectCompraProdutosLivrosAll - quando voce faz select de todos as compras de livros", function(){
	it("deve retornar todas as compras de livros", function(done){
	    db.selectCompraProdutosLivrosAll().then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].titulo).not.toBe(undefined);
		}
		done();
	    });
	});
    });

    describe(" - selectCompraProdutosLivrosTitulo - quando voce faz select de todos as compras de livros de titulo 'o primeiro livro'", function(){
	it("deve retornar todas as compras de livros de titulo 'o primeiro livro' ", function(done){
	    db.selectCompraProdutosLivrosTitulo('o primeiro livro').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].titulo).toBe('o primeiro livro');
		}
		done();
	    });
	});
    });

    describe(" - selectCompraProdutosLivrosAutor - quando voce faz select de todos as compras de livros de autor 'lolie elie'", function(){
	it("deve retornar todas as compras de livros de autor 'o primeiro livro' ", function(done){
	    db.selectCompraProdutosLivrosAutor('lolie elie').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].autor).toBe('lolie elie');
		}
		done();
	    });
	});
    });

    describe(" - selectCompraProdutosLivrosEditora - quando voce faz select de todos as compras de livros de editora 'natura'", function(){
	it("deve retornar todas as compras de livros de editora 'natura' ", function(done){
	    db.selectCompraProdutosLivrosEditora('natura').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].editora).toBe('natura');
		}
		done();
	    });
	});
    });

    describe(" - selectCompraProdutosCdsAll - quando voce faz select de todos as compras de cds", function(){
	it("deve retornar todas as compras de cds", function(done){
	    db.selectCompraProdutosCdAll().then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].numero).not.toBe(undefined);
		}
		done();
	    });
	});
    });

    describe(" - selectCompraProdutosCdsNumero - quando voce faz select de todos as compras de cds de numero 50", function(){
	it("deve retornar todas as compras de cds de numero 50", function(done){
	    db.selectCompraProdutosCdNumero(50).then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].numero).toBe(50);
		}
		done();
	    });
	});
    });

    describe(" - selectCompraProdutosCdsTema - quando voce faz select de todos as compras de cds de tema 'agar agar'", function(){
	it("deve retornar todas as compras de cds de tema 'agar agar'", function(done){
	    db.selectCompraProdutosCdTema('agar agar').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].tema).toBe('agar agar');
		}
		done();
	    });
	});
    });

    describe(" - selectCompraSum - quando voce faz select de todos os precos de todas as compra e soma tudo", function(){
	it("deve retornar a soma dos precos", function(done){
	    db.selectCompraSum().then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].sum).toBe('406.12');
		}
		done();
	    });
	});
    });





    //=======================================================================================
    //=================================         transacoes           ============================
    //========================================================================================




    describe(" - selectTransacaoAll - quando vc dar um select em todas as transacoes", function(){
	it('Deve retornar uma lista de transacoes de 23 transacoes', function(done) {
	    db.selectTransacaoAll().then(function(result) {
		expect(result.rows.length).toBe(23);
		done();
	    });
	});
    });

    describe(" - selectTransacaoPessoaNome - quando voce seleciona transacao da pessoa 'ruju'", function(){
	it("deve retornar todas as transacoes feitas por 'ruju", function(done){
	    db.selectTransacaoPessoaNome('ruju').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].nome).toBe('ruju');
		}
		done();
	    });
	});
    });

    
    describe(" - selectTransacaoPessoaAssociado - quando voce seleciona transacao de pessoas associadas", function(){
    	it("deve retornar todas as transacoes feitas por pessoas associadas", function(done){
    	    db.selectTransacaoPessoaAssociado(true).then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i]['associado?']).toBe(true);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectTransacaoPessoaCpf - quando voce seleciona transacao da pessoa de cpf '1726352512'", function(){
	it("deve retornar todas as transacoes feitas por uma pessoa de cpf '1726352512'", function(done){
	    db.selectTransacaoPessoaCpf('1726352512').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].cpf).toBe('1726352512');
		}
		done();
	    });
	});
    });

    describe(" - selectTransacaoPessoaRg - quando voce seleciona transacao da pessoa de rg '1726352512'", function(){
	it("deve retornar todas as transacoes feitas por uma pessoa de rg '1726352512'", function(done){
	    db.selectTransacaoPessoaRg('1726352512').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].rg).toBe('1726352512');
		}
		done();
	    });
	});
    });

    describe(" - selectTransacaoPessoaTelefone - quando voce seleciona transacao da pessoa de telefone '+55(11)987653782'", function(){
	it("deve retornar todas as transacoes feitas por uma pessoa de telefone '+55(11)987653782'", function(done){
	    db.selectTransacaoPessoaTelefone('+55(11)987653782').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].telefone).toBe('+55(11)987653782');
		}
		done();
	    });
	});
    });

    describe(" - selectTransacaoProdutosLivrosAll - quando voce faz select de todos as transacoes de livros", function(){
	it("deve retornar todas as transacoes de livros", function(done){
	    db.selectTransacaoProdutosLivrosAll().then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].titulo).not.toBe(undefined);
		}
		done();
	    });
	});
    });

    describe(" - selectTransacaoProdutosLivrosTitulo - quando voce faz select de todos as transacoes de livros de titulo 'o primeiro livro'", function(){
	it("deve retornar todas as transacoes de livros de titulo 'o primeiro livro' ", function(done){
	    db.selectTransacaoProdutosLivrosTitulo('o primeiro livro').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].titulo).toBe('o primeiro livro');
		}
		done();
	    });
	});
    });

    describe(" - selectTransacaoProdutosLivrosAutor - quando voce faz select de todos as transacoes de livros de autor 'lolie elie'", function(){
	it("deve retornar todas as transacoes de livros de autor 'o primeiro livro' ", function(done){
	    db.selectTransacaoProdutosLivrosAutor('lolie elie').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].autor).toBe('lolie elie');
		}
		done();
	    });
	});
    });

    describe(" - selectTransacaoProdutosLivrosEditora - quando voce faz select de todos as transacoes de livros de editora 'natura'", function(){
	it("deve retornar todas as transacoes de livros de editora 'natura' ", function(done){
	    db.selectTransacaoProdutosLivrosEditora('natura').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].editora).toBe('natura');
		}
		done();
	    });
	});
    });

    describe(" - selectTransacaoProdutosCdsAll - quando voce faz select de todos as transacoes de cds", function(){
	it("deve retornar todas as transacoes de cds", function(done){
	    db.selectTransacaoProdutosCdAll().then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].numero).not.toBe(undefined);
		}
		done();
	    });
	});
    });

    describe(" - selectTransacaoProdutosCdsNumero - quando voce faz select de todos as transacoes de cds de numero 50", function(){
	it("deve retornar todas as transacoes de cds de numero 50", function(done){
	    db.selectTransacaoProdutosCdNumero(50).then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].numero).toBe(50);
		}
		done();
	    });
	});
    });

    describe(" - selectTransacaoProdutosCdsTema - quando voce faz select de todos as transacoes de cds de tema 'agar agar'", function(){
	it("deve retornar todas as transacoes de cds de tema 'agar agar'", function(done){
	    db.selectTransacaoProdutosCdTema('agar agar').then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].tema).toBe('agar agar');
		}
		done();
	    });
	});
    });

    describe(" - selectTransacoesum - quando voce faz select de todos os precos de todas as transacao e soma tudo", function(){
	it("deve retornar a soma dos precos", function(done){
	    db.selectTransacaoSum().then(function(data){
		for(i=0; i<data.rows.length; i++){
		    expect(data.rows[i].sum).toBe('406.12');
		}
		done();
	    });
	});
    });

});
