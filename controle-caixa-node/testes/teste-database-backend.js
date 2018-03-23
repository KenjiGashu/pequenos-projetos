describe("database", function(){
    var db = require('../serverjs/database.js')

    // =======================================================================================
    // =======================================================================================
    // =================================         make           ============================
    // ========================================================================================
    // =======================================================================================

    describe(" - makeLivro - na criacao de livro", function(){
	var rowCerta = {
	    coisa: 'coisa',
	    coisa_mais: 'coisa_mais',
	    livro_id: '1',
	    titulo: 'um titulo',
	    autor: 'autor',
	    editora: 'editora',
	    id_produto: 1,
	    "associado?": true,
	    cpf: '182737',
	    rg: 'as99293e,',
	    telefone: '2828288'
	};

	var rowErrada = {};
	it("deve criar um livro", function(){
	    var livro = db.makeLivro(rowCerta);
	    expect(livro.livro_id).toBe('1');
	    expect(livro.titulo).toBe('um titulo');
	    expect(livro.autor).toBe('autor');
	    expect(livro.editora).toBe('editora');
	    expect(livro.id_produto).toBe(1);
	    expect(livro.naoexiste).toBe(undefined);
	});

	it("deve jogar excecao quando der erro", function(){
	    try{
		db.makeLivro(rowErrada);
	    }catch(e){
		expect(e).not.toBe(undefined);
	    }
	})
    });

    describe(" - makeCd - na criacao de cd", function(){
	var rowCerta = {
	    coisa: 'coisa',
	    coisa_mais: 'coisa_mais',
	    numero: 1,
	    tema: 'tema',
	    editora: 'editora',
	    id_produto: 1,
	    "associado?": true,
	    cpf: '182737',
	    rg: 'as99293e,',
	    telefone: '2828288'
	};

	var rowErrada = {};
	it("deve criar um cd", function(){
	    var cd = db.makeCd(rowCerta);
	    expect(cd.numero).toBe(1);
	    expect(cd.tema).toBe('tema');
	    expect(cd.id_produto).toBe(1);
	    expect(cd.naoexiste).toBe(undefined);
	});

	it("deve jogar excecao quando der erro", function(){
	    try{
		db.makeCd(rowErrada);
	    }catch(e){
		expect(e).not.toBe(undefined);
	    }
	})
    });

    describe(" - makePessoa - na criacao de pessoa", function(){
	var rowCerta = {
	    coisa: 'coisa',
	    coisa_mais: 'coisa_mais',
	    id: '1',
	    nome: 'nome',
	    "associado?": true,
	    cpf: '182737',
	    rg: 'as99293e,',
	    telefone: '2828288'
	};

	var rowErrada = {};
	it("deve criar um pessoa", function(){
	    var pessoa = db.makePessoa(rowCerta);
	    expect(pessoa.id).toBe('1');
	    expect(pessoa["associado?"]).toBe(true);
	    expect(pessoa.cpf).toBe('182737');
	    expect(pessoa.rg).toBe('as99293e,');
	    expect(pessoa.telefone).toBe('2828288');
	    expect(pessoa.naoexiste).toBe(undefined);
	});

	it("deve jogar excecao quando der erro", function(){
	    try{
		db.makePessoa(rowErrada);
	    }catch(e){
		expect(e).not.toBe(undefined);
	    }
	})
    });

    describe(" - makeCompra - na criacao de compra", function(){
	var rowCerta = {
	    coisa: 'coisa',
	    coisa_mais: 'coisa_mais',
	    compra_id: '1',
	    id_pessoa: 1,
	    data: "2010-10-17T03:00:00.000Z",
	    tema: 'tema',
	    editora: 'editora',
	    id_produto: 1,
	    "associado?": true,
	    cpf: '182737',
	    rg: 'as99293e,',
	    telefone: '2828288'
	};

	var rowErrada = {};
	it("deve criar um compra", function(){
	    var compra = db.makeCompra(rowCerta);
	    var data = new Date("2010-10-17T03:00:00.000Z");
	    expect(compra.compra_id).toBe('1');
	    expect(compra.id_pessoa).toBe(1);
	    expect(compra.id_produto).toBe(1);
	    expect(compra.data.getTime() - data.getTime()).toBe(0);
	    expect(compra.naoexiste).toBe(undefined);
	});

	it("deve jogar excecao quando der erro", function(){
	    try{
		db.makeCompra(rowErrada);
	    }catch(e){
		expect(e).not.toBe(undefined);
	    }
	})
    });

    describe(" - makeTransacao - na criacao de transacao", function(){
	var rowCerta = {
	    coisa: 'coisa',
	    coisa_mais: 'coisa_mais',
	    transacao_id: 1,
	    valor: 1.10,
	    descricao: 'descricao',
	    id_produto: 1,
	    id_pessoa: 1,
	    data: "2010-10-17T03:00:00.000Z",
	    "associado?": true,
	    cpf: '182737',
	    rg: 'as99293e,',
	    telefone: '2828288'
	};

	var rowErrada = {};
	it("deve criar um transacao", function(){
	    var transacao = db.makeTransacao(rowCerta);
	    var data = new Date("2010-10-17T03:00:00.000Z");
	    expect(transacao.transacao_id).toBe(1);
	    expect(transacao.valor).toBe(1.10);
	    expect(transacao.descricao).toBe('descricao');
	    expect(transacao.id_produto).toBe(1);
	    expect(transacao.id_pessoa).toBe(1);
	    expect(transacao.data.getTime() - data.getTime()).toBe(0);
	    expect(transacao.naoexiste).toBe(undefined);
	});

	it("deve jogar excecao quando der erro", function(){
	    try{
		db.makeTransacao(rowErrada);
	    }catch(e){
		expect(e).not.toBe(undefined);
	    }
	})
    });

    
    // describe(" - makeLivroException - quando voce cria uma exception de criacao de livro", function(){
    // 	var exception = new db.makeLivroException('valor');
    // 	it("deve ter como value o parametro passado na criacao", function(){
    // 	    expect(exception.value).toBe('valor');
    // 	});

    // 	it("deve ter uma mensagem padrao", function(){
    // 	    expect(exception.message).toBe(" :: Erro ao criar o livro! Row recebida não possui os atributos necessários.");
    // 	});

    // 	it("toString() deve retornar a mensagem padrao junto com o value", function(){
    // 	    expect(exception.toString()).toBe('valor' + " :: Erro ao criar o livro! Row recebida não possui os atributos necessários.");
    // 	});
    // });

    // describe(" - makePessoaException - quando voce cria uma exception de criacao de pessoa", function(){
    // 	var exception = new db.makePessoaException('valor');
    // 	it("deve ter como value o parametro passado na criacao", function(){
    // 	    expect(exception.value).toBe('valor');
    // 	});

    // 	it("deve ter uma mensagem padrao", function(){
    // 	    expect(exception.message).toBe(" :: Erro ao criar a pessoa! Row recebida não possui os atributos necessários.");
    // 	});

    // 	it("toString() deve retornar a mensagem padrao junto com o value", function(){
    // 	    expect(exception.toString()).toBe('valor' + " :: Erro ao criar a pessoa! Row recebida não possui os atributos necessários.");
    // 	});
    // });
    
    

    // =======================================================================================
    // =================================         pessoas           ============================
    // ========================================================================================
    
    describe(" - selectPessoaId - quando voce seleciona  pessoa de id '1'", function(){
    	it("deve retornar todas as pessoas de id '1'", function(done){
    	    db.selectPessoaId('1').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].id).toBe('1');
    		}
    		done();
    	    });
    	});
    });

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
    		    expect(data.rows[i].nome.indexOf('ruju')).not.toBe(-1);
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
    		    expect(data.rows[i].cpf.indexOf('1726352512')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectPessoaRg - quando voce seleciona  pessoa de rg '264758371'", function(){
    	it("deve retornar todas as pessoas de rg '264758371'", function(done){
    	    db.selectPessoaRg('264758371').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].rg.indexOf('264758371')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectPessoaTelefone - quando voce seleciona pessoa de telefone '+55(11)987653782'", function(){
    	it("deve retornar todas as pessoas de telefone '+55(11)987653782'", function(done){
    	    db.selectPessoaTelefone('+55(11)987653782').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].telefone.indexOf('+55(11)987653782')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });


    //=======================================================================================
    //=================================         produtos           ============================
    //========================================================================================

    describe(" - selectProdutosLivrosId - quando voce seleciona livro de id 1", function(){
    	it("deve retornar todos os livros de id 1", function(done){
    	    db.selectProdutosLivrosId(1).then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].livro_id).toBe('1');
    		}
    		done();
    	    });
    	});
    });

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
    		    expect(data.rows[i].titulo.indexOf('nanda kore')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectProdutosLivrosAutor - quando voce seleciona todos  livros de autor 'tetsushi'", function(){
    	it("deve retornar todos os livros de autor 'tetsushi'", function(done){
    	    db.selectProdutosLivrosAutor('tetsushi').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].autor.indexOf('tetsushi')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectProdutosLivrosEditora - quando voce seleciona todos  livros de editora 'enfim, sera?'", function(){
    	it("deve retornar todos os livros de editora 'enfim, sera?'", function(done){
    	    db.selectProdutosLivrosEditora('enfim, sera?').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].editora.indexOf('enfim, sera?')).not.toBe(-1);
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
    		    expect(data.rows[i].tema.indexOf('sem topo nao tem bottom')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    
    
    
    //=======================================================================================
    //=================================         compras           ============================
    //========================================================================================

    describe(" - selectCompraId - quando voce seleciona compra da pessoa '1'", function(){
    	it("deve retornar todas as compras feitas por '1", function(done){
    	    db.selectCompraId('1').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].compra_id).toBe('1');
    		}
    		done();
    	    });
    	});
    });
    
    describe(" - selectCompraAll - quando vc dar um select em todas as compras", function(){
    	it('Deve retornar uma lista de compras de 23 compras', function(done) {
    	    db.selectCompraAll().then(function(result) {
    		expect(result.rows.length).toBe(23);
    		done();
    	    });
    	});
    });

    describe(" - selectCompraPessoaId - quando voce faz select de todos as compras de pessoas de id '1'", function(){
    	it("deve retornar todas as compras de pessoas de id '1' ", function(done){
    	    db.selectCompraPessoasId('1').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].pessoa_id).toBe('1');
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectCompraPessoaNome - quando voce seleciona compra da pessoa 'ruju'", function(){
    	it("deve retornar todas as compras feitas por 'ruju", function(done){
    	    db.selectCompraPessoaNome('ruju').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].nome.indexOf('ruju')).not.toBe(-1);
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
    		    expect(data.rows[i].cpf.indexOf('1726352512')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectCompraPessoaRg - quando voce seleciona compra da pessoa de rg '1726352512'", function(){
    	it("deve retornar todas as compras feitas por uma pessoa de rg '1726352512'", function(done){
    	    db.selectCompraPessoaRg('1726352512').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].rg.indexOf('1726352512')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectCompraPessoaTelefone - quando voce seleciona compra da pessoa de telefone '+55(11)987653782'", function(){
    	it("deve retornar todas as compras feitas por uma pessoa de telefone '+55(11)987653782'", function(done){
    	    db.selectCompraPessoaTelefone('+55(11)987653782').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].telefone.indexOf('+55(11)987653782')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectCompraProdutosLivrosId - quando voce faz select de todos as compras de livros de id '1'", function(){
    	it("deve retornar todas as compras de livros de id '1' ", function(done){
    	    db.selectCompraProdutosLivrosId('1').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].livro_id).toBe('1');
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
    		    expect(data.rows[i].titulo.indexOf('o primeiro livro')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectCompraProdutosLivrosAutor - quando voce faz select de todos as compras de livros de autor 'lolie elie'", function(){
    	it("deve retornar todas as compras de livros de autor 'o primeiro livro' ", function(done){
    	    db.selectCompraProdutosLivrosAutor('lolie elie').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].autor.indexOf('lolie elie')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectCompraProdutosLivrosEditora - quando voce faz select de todos as compras de livros de editora 'natura'", function(){
    	it("deve retornar todas as compras de livros de editora 'natura' ", function(done){
    	    db.selectCompraProdutosLivrosEditora('natura').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].editora.indexOf('natura')).not.toBe(-1);
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
    		    expect(data.rows[i].tema.indexOf('agar agar')).not.toBe(-1);
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


    describe(" - selectTransacaoId - quando voce seleciona transacao de pessoas associadas", function(){
    	it("deve retornar todas as transacoes feitas por pessoas associadas", function(done){
    	    db.selectTransacaoId(1).then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i]['transacao_id']).toBe(1);
    		}
    		done();
    	    });
    	});
    });


    describe(" - selectTransacaoAll - quando vc dar um select em todas as transacoes", function(){
    	it('Deve retornar uma lista de transacoes de 23 transacoes', function(done) {
    	    db.selectTransacaoAll().then(function(result) {
    		expect(result.rows.length).toBe(23);
    		done();
    	    });
    	});
    });

    describe(" - selectTransacaoPessoasId - quando voce seleciona transacao da pessoa '1'", function(){
    	it("deve retornar todas as transacoes feitas por '1", function(done){
    	    db.selectTransacaoPessoasId('1').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].pessoa_id).toBe('1');
    		}
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

    describe(" - selectTransacaoProdutosLivrosId - quando voce faz select de todos as transacoes de livros de id '1'", function(){
    	it("deve retornar todas as transacoes de livros de id '1' ", function(done){
    	    db.selectTransacaoProdutosLivrosId('1').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].livro_id).toBe('1');
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectTransacaoProdutosLivrosTitulo - quando voce faz select de todos as transacoes de livros de titulo 'o primeiro livro'", function(){
    	it("deve retornar todas as transacoes de livros de titulo 'o primeiro livro' ", function(done){
    	    db.selectTransacaoProdutosLivrosTitulo('o primeiro livro').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].titulo.indexOf('o primeiro livro')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectTransacaoProdutosLivrosAutor - quando voce faz select de todos as transacoes de livros de autor 'lolie elie'", function(){
    	it("deve retornar todas as transacoes de livros de autor 'o primeiro livro' ", function(done){
    	    db.selectTransacaoProdutosLivrosAutor('lolie elie').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].autor.indexOf('lolie elie')).not.toBe(-1);
    		}
    		done();
    	    });
    	});
    });

    describe(" - selectTransacaoProdutosLivrosEditora - quando voce faz select de todos as transacoes de livros de editora 'natura'", function(){
    	it("deve retornar todas as transacoes de livros de editora 'natura' ", function(done){
    	    db.selectTransacaoProdutosLivrosEditora('natura').then(function(data){
    		for(i=0; i<data.rows.length; i++){
    		    expect(data.rows[i].editora.indexOf('natura')).not.toBe(-1);
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
    		    expect(data.rows[i].tema.indexOf('agar agar')).not.toBe(-1);
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

    //=======================================================================================
    //=======================================================================================
    //===============================         updates           =============================
    //=======================================================================================
    //=======================================================================================

    // describe(" - updatePessoa - quando voce atualiza uma coluna da pessoa de id 1", function(){
    // 	it("deve atualizar a pessoa de id 1", function(done){
    // 	    var pessoa;
    // 	    var nome;
    // 	    var outronome = 'outro nome';
    // 	    db.selectPessoaId('1').then(function(data){
    // 		try{
    // 		    pessoa = db.makePessoa(data.rows[0]);
    // 		} catch(e){
    // 		    console.log(e.toString() + 'erro ao criar pessoa');
    // 		};
    // 		nome = pessoa.nome;
    // 		pessoa.nome = outronome;
    // 		return db.updatePessoa(pessoa);
		
    // 	    }).then(function(data){
    // 		return db.selectPessoaId(1);
    // 	    }).then(function(data){
    // 		expect(data.rows[0].id).toBe('1');
    // 		expect(data.rows[0].nome).toBe(outronome);
    // 		pessoa.nome = nome;
    // 		return db.updatePessoa(pessoa);
    // 	    }).then(function(data){
    // 		return db.selectPessoaId(1);
    // 	    }).then(function(data){
    // 		expect(data.rows[0].id).toBe('1');
    // 		expect(data.rows[0].nome).toBe(nome);
    // 		done();
    // 	    }).catch(function(err){
    // 		console.log(err);
    // 	    });   
    // 	});
    // });


    // describe(" - updateLivro - quando voce atualiza uma coluna da livro de id 1", function(){
    // 	it("deve atualizar a livro de id 1", function(done){
    // 	    var livro;
    // 	    var titulo;
    // 	    var outrotitulo = 'outro titulo';
    // 	    db.selectProdutosLivrosId(1).then(function(data){
    // 		console.log(data);
    // 		try{
    // 		    livro = db.makeLivro(data.rows[0]);
    // 		}catch(e){
    // 		    console.log(e.toString());
    // 		}
    // 		titulo = livro.titulo;
    // 		livro.titulo = outrotitulo;
    // 		return db.updateLivro(livro);
		
    // 	    }).then(function(data){
    // 		console.log(data);
    // 		return db.selectProdutosLivrosId(1);
    // 	    }).then(function(data){
    // 		expect(data.rows[0].livro_id).toBe('1');
    // 		expect(data.rows[0].titulo).toBe(outrotitulo);
    // 		livro.titulo = titulo;
    // 		return db.updateLivro(livro);
    // 	    }).then(function(data){
    // 		return db.selectProdutosLivrosId(1);
    // 	    }).then(function(data){
    // 		expect(data.rows[0].livro_id).toBe('1');
    // 		expect(data.rows[0].titulo).toBe(titulo);
    // 		done();
    // 	    }).catch(function(err){
    // 		console.log(err);
    // 	    });   
    // 	});
    // });

    describe(" - updateCd - quando voce atualiza uma coluna da cd de id 1", function(){
    	it("deve atualizar a cd de id 1", function(done){
    	    var cd;
    	    var tema = 'um tema';
    	    var outrotema = 'outro tema';
	    var numero = 1;
	    var outronumero = 12;
    	    db.selectProdutosCdsNumero(1).then(function(data){
		try{
		    cd = db.makeCd(data.rows[0]);
		}catch(e){
		    console.log(e.toString());
		}

		
    		tema = cd.tema;
		numero = cd.numero;
    		cd.tema = 'outro tema';
		cd.numero_new = 12;
		console.log('atualizar!')
		console.log(cd);
    		return db.updateCd(cd);
		
    	    }).then(function(data){
		console.log(data);
    		return db.selectProdutosCdsNumero(12);
    	    }).then(function(data){
		console.log('atualizado!')
		console.log(data.rows[0]);
    		expect(data.rows[0].numero).toBe(outronumero);
    		expect(data.rows[0].tema).toBe(outrotema);
		cd.tema = data.rows[0].tema;
		cd.numero = data.rows[0].numero;
		//troca de volta
    		cd.tema = 'um tema';
		cd.numero_new = 1;
    		return db.updateCd(cd);
    	    }).then(function(data){
		console.log(data);
    		return db.selectProdutosCdsNumero(1);
    	    }).then(function(data){
		console.log(data);
    		expect(data.rows[0].numero).toBe(numero);
    		expect(data.rows[0].tema).toBe(tema);
    		done();
    	    }).catch(function(err){
    		console.log(err);
    	    });   
    	});
    });
})



