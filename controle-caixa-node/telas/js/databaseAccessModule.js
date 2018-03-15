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
	    getProdutosLivrosAutorLivrosEditora: function(editora){
		return $http({
		    method: 'GET',
		    url: '/dbservice/livro/editora/' + editora,
		});
	    },
	    getProdutosLivrosAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/livro/all/',
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
		    url: '/dbservice/cd/all/',
		});
	    },
	    getPessoaAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/pessoa/all/',
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
	    getCompraAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/all/',
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
	    getCompraLivroAll: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/livro/all/',
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
		    url: '/dbservice/compra/cd/all/',
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
	    getSoma: function(){
		return $http({
		    method: 'GET',
		    url: '/dbservice/compra/soma/preco',
		});
	    },

	    
	};
    }]);