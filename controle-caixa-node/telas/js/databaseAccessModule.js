angular.module('databaseAccessModule', [])
    .factory('databaseService', ['$http', function($http){
	// quero configurar aqui fazendo uns treco
	return {
	    getProdutosLivrosTitulo: function(titulo){
		return $http({
		    method: 'GET',
		    url: '/dbservice/livro/titulo/' + titulo,
		});
	    },
	    
	    getProdutosLivrosAutor: function(autor){
		return $http({
		    method: 'GET',
		    url: '/dbservice/livro/autor/' + autor,
		});
	    },
	    getProdutosLivrosEditora: function(editora){
		return $http({
		    method: 'GET',
		    url: '/dbservice/livro/editora/' + editora,
		});
	    },
	    getProdutosLivrosAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/livro/all',
		});
	    },
	    getProdutosCdsTema: function(tema){
		return $http({
		    method: 'GET',
		    url: '/dbservice/cd/tema/' + tema,
		});
	    },
	    getProdutosCdsNumero: function(numero){
		return $http({
		    method: 'GET',
		    url: '/dbservice/cd/numero/' + numero,
		});
	    },
	    getProdutosCdsAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/cd/all',
		});
	    },
	    getPessoaAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/pessoa/all',
		});
	    },
	    getPessoaNome: function(nome) {
		return $http({
		    method: 'GET',
		    url: '/dbservice/pessoa/nome/' + nome,
		});
		
	    },
	    getPessoaAssociado: function(associado){
		return $http({
		    method: 'GET',
		    url: '/dbservice/pessoa/associado/' + associado,
		});
	    },
	    getPessoaCpf: function(cpf){
		return $http({
		    method: 'GET',
		    url: '/dbservice/pessoa/cpf/' + cpf,
		});
	    },
	    getPessoaRg: function(rg){
		return $http({
		    method: 'GET',
		    url: '/dbservice/pessoa/rg/' + rg,
		});
	    },
	    getPessoaTelefone: function(telefone){
		return $http({
		    method: 'GET',
		    url: '/dbservice/pessoa/telefone/' + telefone,
		});
	    },
	    getCompraAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/all',
		});
	    },
	    getCompraPessoaNome: function(nome){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/pessoa/nome/' + nome,
		});
	    },
	    getCompraPessoaAssociado: function(associado){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/pessoa/associado/' + associado,
		});
	    },
	    getCompraPessoaCpf: function(cpf){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/pessoa/cpf/' + cpf,
		});
	    },
	    getCompraPessoaRg: function(rg){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/pessoa/rg/' + rg,
		});
	    },
	    getCompraPessoaTelefone: function(telefone){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/pessoa/telefone/' + telefone,
		});
	    },
	    getCompraLivroAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/livro/all',
		});
	    },
	    getCompraLivroTitulo: function(titulo){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/livro/titulo/' + titulo,
		});
	    },
	    getCompraLivroAutor: function(autor){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/livro/autor/' + autor,
		});
	    },
	    getCompraLivroEditora: function(editora){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/livro/editora/' + editora,
		});
	    },
	    getCompraCdAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/cd/all',
		});
	    },
	    getCompraCdTema: function(tema){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/cd/tema/' + tema,
		});
	    },
	    getCompraCdNumero: function(numero){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/cd/numero/' + numero,
		});
	    },
	    getCompraSum: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/soma/preco',
		});
	    },

	    getTransacaoAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/all',
		});
	    },
	    getTransacaoPessoaNome: function(nome){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/pessoa/nome/' + nome,
		});
	    },
	    getTransacaoPessoaAssociado: function(associado){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/pessoa/associado/' + associado,
		});
	    },
	    getTransacaoPessoaCpf: function(cpf){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/pessoa/cpf/' + cpf,
		});
	    },
	    getTransacaoPessoaRg: function(rg){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/pessoa/rg/' + rg,
		});
	    },
	    getTransacaoPessoaTelefone: function(telefone){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/pessoa/telefone/' + telefone,
		});
	    },
	    
	    getTransacaoLivroAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/livro/all',
		});
	    },
	    getTransacaoLivroTitulo: function(titulo){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/livro/titulo/' + titulo,
		});
	    },
	    getTransacaoLivroAutor: function(autor){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/livro/autor/' + autor,
		});
	    },
	    getTransacaoLivroEditora: function(editora){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/livro/editora/' + editora,
		});
	    },
	    getTransacaoCdAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/cd/all',
		});
	    },
	    getTransacaoCdTema: function(tema){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/cd/tema/' + tema,
		});
	    },
	    getTransacaoCdNumero: function(numero){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/cd/numero/' + numero,
		});
	    },
	    getTransacaoSum: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/transacao/soma/valor',
		});
	    },
	    
	};
    }]);
