describe('Database Factory', function() {

    
    //=======================================================================================
    //=================================         init           ============================
    //====================  inicializa o modulo de acesso ao banco de dados =================
    //========================================================================================
    var databaseService;
    var httpBackend;
    var $controller;
    var mock_scope;
    var mockcontroller;
    var rootScope;
    var teste;

    beforeEach(module('testModule'));
    beforeEach(inject(function (_databaseService_, _$controller_, _$httpBackend_, _$rootScope_) {
	databaseService = _databaseService_;
	$controller = _$controller_;
	httpBackend = _$httpBackend_;
	rootScope = _$rootScope_;
	mock_scope = {};
	mockController = $controller('mockController', {$scope: mock_scope});
    }));
    


    //=======================================================================================
    //=================================         pessoas           ============================
    //========================================================================================


    describe(" - getPessoaAll - quando vc dar um get em todas as pessoas", function(){
	it('Deve retornar uma lista de pessoas', function(done) {
	    databaseService.getPessoaAll().then(function(response){
		for(i=0; i<response.data.rows.length; i++){
		    expect(response.data.rows[i].nome).not.toBe(undefined);
		}
		done();
	    }, function(error){
		expect(error).toBe(null);
		done();
	    });
	    
	    httpBackend
	    	.when('GET', '/dbservice/pessoa/all')
	    	.respond(function(method, url, data) {
	    	    return [200, mock_scope.pessoaAll, {}];
	    });
	    
	    httpBackend
	    	.expect('GET', '/dbservice/pessoa/all');

	    httpBackend.flush();
	});
    });
    

    describe(" - getPessoaNome - quando voce seleciona pessoa 'ruju'", function(){
    	it("deve retornar todas as pessoas 'ruju'", inject(function($httpBackend){
    	    databaseService.getPessoaNome('ruju').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].nome).toBe('ruju');
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/pessoa/nome/ruju')
    		.respond(200, mock_scope.pessoaRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/pessoa/nome/ruju');
	    httpBackend.flush();
    	}));
    });
    
    

    describe(" - getPessoaAssociado - quando voce seleciona pessoas associadas", function(){
    	it("deve retornar todas as pessoas associadas", inject(function($httpBackend){
    	    databaseService.getPessoaAssociado(true).then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i]['associado?']).toBe(true);
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/pessoa/associado/true')
    		.respond(200, mock_scope.pessoaRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/pessoa/associado/true');
	    $httpBackend.flush();
    	}));
    });

    

    describe(" - getPessoaCpf - quando voce seleciona  pessoa de cpf '7361524214'", function(){
    	it("deve retornar todas as pessoas de cpf '7361524214'", inject(function($httpBackend){
    	    databaseService.getPessoaCpf('7361524214').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].cpf).toBe('7361524214');
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/pessoa/cpf/7361524214')
    		.respond(200, mock_scope.pessoaRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/pessoa/cpf/7361524214');
            $httpBackend.flush();
    	}));
    });

    

    describe(" - getPessoaRg - quando voce seleciona  pessoa de rg '264758371'", function(){
    	it("deve retornar todas as pessoas de rg '264758371'", inject(function($httpBackend){
    	    databaseService.getPessoaRg('264758371').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].rg).toBe('264758371');
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/pessoa/rg/264758371')
    		.respond(200, mock_scope.pessoaRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/pessoa/rg/264758371');
	    $httpBackend.flush();
    	}));
    });


    
    describe(" - getPessoaTelefone - quando voce seleciona pessoa de telefone 'oi, eu sou'", function(){
    	it("deve retornar todas as pessoas de telefone 'oi, eu sou'", inject(function($httpBackend){
    	    databaseService.getPessoaTelefone('oi, eu sou').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].telefone).toBe('oi, eu sou');
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/pessoa/telefone/oi, eu sou')
    		.respond(200, mock_scope.pessoaRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/pessoa/telefone/oi, eu sou');
	    $httpBackend.flush();
    	}));
    });

    


    //=======================================================================================
    //=================================         produtos           ============================
    //========================================================================================

    describe(" - getProdutosLivrosAll - quando voce seleciona todos  os livros", function(){
    	it("deve retornar todos os livros", inject(function($httpBackend){
    	    databaseService.getProdutosLivrosAll().then(function(response){

		expect(response.data.rows.length).toBe(3);

		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].titulo).not.toBe(undefined);
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/livro/all')
    		.respond(200, mock_scope.livroNatura);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/livro/all');
    	    $httpBackend.flush();
    	}));
    });

    describe(" - getProdutosCdsAll - quando voce seleciona todos  os cds", function(){
    	it("deve retornar todos os cds", inject(function($httpBackend){

	    databaseService.getProdutosCdsAll().then(function(response){

		expect(response.data.rows.length).toBe(2);

		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].numero).not.toBe(undefined);
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/cd/all')
    		.respond(200, mock_scope.cdTema);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/cd/all');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getProdutosLivrosTitulo - quando voce seleciona todos  livros de titulo 'nanda kore'", function(){
    	it("deve retornar todos os livros de titulo 'nanda kore'", inject(function($httpBackend){
    	    databaseService.getProdutosLivrosTitulo('nanda kore').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].titulo).toBe('nanda kore');
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/livro/titulo/nanda kore')
    		.respond(200, mock_scope.livroNandaKore);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/livro/titulo/nanda kore');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getProdutosLivrosAutor - quando voce seleciona todos  livros de autor 'tetsushi'", function(){
    	it("deve retornar todos os livros de autor 'tetsushi'", inject(function($httpBackend){
    	    databaseService.getProdutosLivrosAutor('tetsushi').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].autor.indexOf('tetsushi')).not.toBe(-1);
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/livro/autor/tetsushi')
    		.respond(200, mock_scope.livroTetsushi);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/livro/autor/tetsushi');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getProdutosLivrosEditora - quando voce seleciona todos  livros de editora 'natura'", function(){
    	it("deve retornar todos os livros de editora 'natura'", inject(function($httpBackend){
    	    databaseService.getProdutosLivrosEditora('natura').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].editora).toBe('natura');
    		}
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/livro/editora/natura')
    		.respond(200, mock_scope.livroNatura);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/livro/editora/natura');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getProdutosCdsNumero - quando voce seleciona todos  cds de numero 50", function(){
    	it("deve retornar todos os cds de numero 50", inject(function($httpBackend){
    	    databaseService.getProdutosCdsNumero(50).then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].numero).toBe(50);
    		}
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/cd/numero/50')
    		.respond(200, mock_scope.cd50);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/cd/numero/50');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getProdutosCdsTema - quando voce seleciona todos  cds de tema 'tema'", function(){
    	it("deve retornar todos os cds de tema 'tema'", inject(function($httpBackend){
    	    databaseService.getProdutosCdsTema('tema').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].tema.indexOf('tema')).not.toBe(-1);
    		}
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/cd/tema/tema')
    		.respond(200, mock_scope.cdTema);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/cd/tema/tema');
	    $httpBackend.flush();
    	}));
    });

    
    
    
    //=======================================================================================
    //=================================         compras           ============================
    //========================================================================================

    describe(" - getCompraAll - quando vc dar um get em todas as compras", function(){
    	it('Deve retornar uma lista de compras de 23 compras', inject(function($httpBackend) {
    	    databaseService.getCompraAll().then(function(response) {
    		expect(response.data.rows.length).toBe(1);
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/compra/all')
    		.respond(200, mock_scope.compraLivroTitulo);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/all');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraPessoaNome - quando voce seleciona compra da pessoa 'ruju'", function(){
    	it("deve retornar todas as compras feitas por 'ruju", inject(function($httpBackend){
    	    databaseService.getCompraPessoaNome('ruju').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].nome).toBe('ruju');
    		}
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/compra/pessoa/nome/ruju')
    		.respond(200, mock_scope.compraPessoaRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/pessoa/nome/ruju');
	    $httpBackend.flush();
    	}));
    });

    
    describe(" - getCompraPessoaAssociado - quando voce seleciona compra de pessoas associadas", function(){
    	it("deve retornar todas as compras feitas por pessoas associadas", inject(function($httpBackend){
    	    databaseService.getCompraPessoaAssociado(true).then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i]['associado?']).toBe(true);
    		}
    		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/compra/pessoa/associado/true')
    		.respond(200, mock_scope.compraPessoaRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/pessoa/associado/true');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraPessoaCpf - quando voce seleciona compra da pessoa de cpf '7361524214'", function(){
    	it("deve retornar todas as compras feitas por uma pessoa de cpf '7361524214'", inject(function($httpBackend){
    	    databaseService.getCompraPessoaCpf('7361524214').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].cpf).toBe('7361524214');
    		}
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/compra/pessoa/cpf/7361524214')
    		.respond(200, mock_scope.compraPessoaRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/pessoa/cpf/7361524214');
	    $httpBackend.flush();
    	}));
    });

    

    describe(" - getCompraPessoaRg - quando voce seleciona compra da pessoa de rg '264758371'", function(){
    	it("deve retornar todas as compras feitas por uma pessoa de rg '264758371'", inject(function($httpBackend){
    	    databaseService.getCompraPessoaRg('264758371').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].rg).toBe('264758371');
    		}
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/compra/pessoa/rg/264758371')
    		.respond(200, mock_scope.compraPessoaRuju);

	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/pessoa/rg/264758371');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraPessoaTelefone - quando voce seleciona compra da pessoa de telefone null", function(){
    	it("deve retornar todas as compras feitas por uma pessoa de telefone null", inject(function($httpBackend){
    	    databaseService.getCompraPessoaTelefone(null).then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].telefone).toBe(null);
    		}
		
    	    });
    	    $httpBackend
    		.when('GET', '/dbservice/compra/pessoa/telefone/null')
    		.respond(200, mock_scope.compraPessoaRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/pessoa/telefone/null');
	    $httpBackend.flush();
    	}));
	
    });

    describe(" - getCompraLivroAll - quando voce faz get de todos as compras de livros", function(){
    	it("deve retornar todas as compras de livros", inject(function($httpBackend){
    	    databaseService.getCompraLivroAll().then(function(response){
    		expect(response.data.rows.length).toBe(5);
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].titulo).not.toBe(undefined);
    		}
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/compra/livro/all')
    		.respond(200, mock_scope.compraLivroTetsushi);

	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/livro/all');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraLivroTitulo - quando voce faz get de todos as compras de livros de titulo 'o primeiro livro'", function(){
    	it("deve retornar todas as compras de livros de titulo 'o primeiro livro' ", inject(function($httpBackend){
    	    databaseService.getCompraLivroTitulo('o primeiro livro').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].titulo).toBe('o primeiro livro');
    		}
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/compra/livro/titulo/o primeiro livro')
    		.respond(200, mock_scope.compraLivroOPrimeiro);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/livro/titulo/o primeiro livro');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraLivrosAutor - quando voce faz get de todos as compras de livros de autor 'tetsushi'", function(){
    	it("deve retornar todas as compras de livros de autor 'tetsushi' ", inject(function($httpBackend){
    	    databaseService.getCompraLivroAutor('tetsushi').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].autor.indexOf('tetsushi')).not.toBe(-1);
    		}
		
    	    });
    	    $httpBackend
    		.when('GET', '/dbservice/compra/livro/autor/tetsushi')
    		.respond(200, mock_scope.compraLivroTetsushi);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/livro/autor/tetsushi');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraLivroEditora - quando voce faz get de todos as compras de livros de editora 'natura'", function(){
    	it("deve retornar todas as compras de livros de editora 'natura' ", inject(function($httpBackend){
    	    databaseService.getCompraLivroEditora('natura').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].autor.indexOf('tetsushi')).not.toBe(-1);
    		}
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/compra/livro/editora/natura')
    		.respond(200, mock_scope.compraLivroTetsushi);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/livro/editora/natura');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraCdAll - quando voce faz get de todos as compras de cds", function(){
    	it("deve retornar todas as compras de cds", inject(function($httpBackend){
    	    databaseService.getCompraCdAll().then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].numero).not.toBe(undefined);
    		}
		
    	    });

    	    $httpBackend
    		.when('GET', '/dbservice/compra/cd/all')
    		.respond(200, mock_scope.compraCd50);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/cd/all');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraCdNumero - quando voce faz get de todos as compras de cd de numero 50", function(){
    	it("deve retornar todas as compras de cds de numero 50", inject(function($httpBackend){
    	    databaseService.getCompraCdNumero(50).then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].numero).toBe(50);
    		}
		
    	    });
    	    $httpBackend
    		.when('GET', '/dbservice/compra/cd/numero/50')
    		.respond(200, mock_scope.compraCd50);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/cd/numero/50');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraCdTema - quando voce faz get de todos as compras de cds de tema 'agar agar'", function(){
    	it("deve retornar todas as compras de cds de tema 'agar agar'", inject(function($httpBackend){
    	    databaseService.getCompraCdTema('agar agar').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].numero).toBe(50);
    		}
		
    	    });
    	    $httpBackend
    		.when('GET', '/dbservice/compra/cd/tema/agar agar')
    		.respond(200, mock_scope.compraCd50);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/cd/tema/agar agar');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getCompraSum - quando voce faz get de todos os precos de todas as compra e soma tudo", function(){
    	it("deve retornar a soma dos precos", inject(function($httpBackend){
    	    databaseService.getCompraSum().then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].sum).toBe('406.12');
    		}
		
    	    }); 
    	    $httpBackend
    		.when('GET', '/dbservice/compra/soma/preco')
    		.respond(200, mock_scope.compraSum);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/compra/soma/preco');
	    $httpBackend.flush();
    	}));
    });





    //=======================================================================================
    //=================================         transacoes           ============================
    //========================================================================================




    describe(" - getTransacaoAll - quando vc dar um get em todas as transacoes", function(){
    	it('Deve retornar uma lista de transacoes de 23 transacoes', inject(function($httpBackend) {
    	    databaseService.getTransacaoAll().then(function(response) {
    		expect(response.data.rows.length).toBe(3);
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/all')
    		.respond(200, mock_scope.transacaoRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/all');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoPessoaNome - quando voce seleciona transacao da pessoa 'ruju'", function(){
    	it("deve retornar todas as transacoes feitas por 'ruju", inject(function($httpBackend){
    	    databaseService.getTransacaoPessoaNome('ruju').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].nome).toBe('ruju');
    		}
		$httpBackend
    		.when('GET', '/dbservice/transacao/pessoa/nome/ruju')
    		.respond(200, mock_scope.transacaoRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/pessoa/nome/ruju');
	    $httpBackend.flush();
    	    });
    	}));
    });

    
    describe(" - getTransacaoPessoaAssociado - quando voce seleciona transacao de pessoas associadas", function(){
    	it("deve retornar todas as transacoes feitas por pessoas associadas", inject(function($httpBackend){
    	    databaseService.getTransacaoPessoaAssociado(true).then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i]['associado?']).toBe(true);
    		}
    		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/pessoa/associado/true')
    		.respond(200, mock_scope.transacaoRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/pessoa/associado/true');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoPessoaCpf - quando voce seleciona transacao da pessoa de cpf '7361524214'", function(){
    	it("deve retornar todas as transacoes feitas por uma pessoa de cpf '7361524214'", inject(function($httpBackend){
    	    databaseService.getTransacaoPessoaCpf('7361524214').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].cpf).toBe('7361524214');
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/pessoa/cpf/7361524214')
    		.respond(200, mock_scope.transacaoRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/pessoa/cpf/7361524214');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoPessoaRg - quando voce seleciona transacao da pessoa de rg '264758371'", function(){
    	it("deve retornar todas as transacoes feitas por uma pessoa de rg '264758371'", inject(function($httpBackend){
    	    databaseService.getTransacaoPessoaRg('264758371').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].rg).toBe('264758371');
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/pessoa/rg/264758371')
    		.respond(200, mock_scope.transacaoRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/pessoa/rg/264758371');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoPessoaTelefone - quando voce seleciona transacao da pessoa de telefone 'null'", function(){
    	it("deve retornar todas as transacoes feitas por uma pessoa de telefone 'null'", inject(function($httpBackend){
    	    databaseService.getTransacaoPessoaTelefone(null).then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].telefone).toBe(null);
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/pessoa/telefone/null')
    		.respond(200, mock_scope.transacaoRuju);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/pessoa/telefone/null');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoLivroAll - quando voce faz get de todos as transacoes de livros", function(){
    	it("deve retornar todas as transacoes de livros", inject(function($httpBackend){
    	    databaseService.getTransacaoLivroAll().then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].titulo).not.toBe(undefined);
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/livro/all')
    		.respond(200, mock_scope.transacaoMango);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/livro/all');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoLivroTitulo - quando voce faz get de todos as transacoes de livros de titulo 'mango'", function(){
    	it("deve retornar todas as transacoes de livros de titulo 'mango' ", inject(function($httpBackend){
    	    databaseService.getTransacaoLivroTitulo('mango').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].titulo.indexOf('mango')).not.toBe(-1);
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/livro/titulo/mango')
    		.respond(200, mock_scope.transacaoMango);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/livro/titulo/mango');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoLivroAutor - quando voce faz get de todos as transacoes de livros de autor 'lolie elie'", function(){
    	it("deve retornar todas as transacoes de livros de autor 'o primeiro livro' ", inject(function($httpBackend){
    	    databaseService.getTransacaoLivroAutor('lolie elie').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].autor).toBe('lolie elie');
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/livro/autor/lolie elie')
    		.respond(200, mock_scope.transacaoMango);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/livro/autor/lolie elie');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoLivroEditora - quando voce faz get de todos as transacoes de livros de editora 'enfim, sera?'", function(){
    	it("deve retornar todas as transacoes de livros de editora 'enfim, sera?' ", inject(function($httpBackend){
    	    databaseService.getTransacaoLivroEditora('enfim, sera?').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].editora).toBe('enfim, sera?');
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/livro/editora/enfim, sera?')
    		.respond(200, mock_scope.transacaoMango);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/livro/editora/enfim, sera?');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoCdAll - quando voce faz get de todos as transacoes de cds", function(){
    	it("deve retornar todas as transacoes de cds", inject(function($httpBackend){
    	    databaseService.getTransacaoCdAll().then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].numero).not.toBe(undefined);
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/cd/all')
    		.respond(200, mock_scope.transacaoTerceiro);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/cd/all');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoCdNumero - quando voce faz get de todos as transacoes de cds de numero 3", function(){
    	it("deve retornar todas as transacoes de cds de numero 3", inject(function($httpBackend){
    	    databaseService.getTransacaoCdNumero(3).then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].numero).toBe(3);
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/cd/numero/3')
    		.respond(200, mock_scope.transacaoTerceiro);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/cd/numero/3');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaoCdTema - quando voce faz get de todos as transacoes de cds de tema 'terceiro'", function(){
    	it("deve retornar todas as transacoes de cds de tema 'terceiro'", inject(function($httpBackend){
    	    databaseService.getTransacaoCdTema('terceiro').then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].tema.indexOf('terceiro')).not.toBe(-1);
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/cd/tema/terceiro')
    		.respond(200, mock_scope.transacaoTerceiro);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/cd/tema/terceiro');
	    $httpBackend.flush();
    	}));
    });

    describe(" - getTransacaosum - quando voce faz get de todos os precos de todas as transacao e soma tudo", function(){
    	it("deve retornar a soma dos precos", inject(function($httpBackend){
    	    databaseService.getTransacaoSum().then(function(response){
    		for(i=0; i<response.data.rows.length; i++){
    		    expect(response.data.rows[i].sum).toBe('406.12');
    		}
		
    	    });
	    $httpBackend
    		.when('GET', '/dbservice/transacao/soma/valor')
    		.respond(200, mock_scope.transacaoSum);
	    
    	    $httpBackend
    		.expect('GET', '/dbservice/transacao/soma/valor');
	    $httpBackend.flush();
    	}));
    });
});
