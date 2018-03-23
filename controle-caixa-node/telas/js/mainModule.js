angular.module("mainModule", ['ngMaterial', 'databaseAccessModule'])



    .controller('DialogCtrl', function($scope, $mdDialog) {
	$scope.status = '  ';
	$scope.customFullscreen = false;
	$scope.menuOpen = undefined;

	$scope.menuClick = function(){
	    if(!$scope.menuOpen){
		$scope.menuOpen = 'menu-open';
	    } else{
		$scope.menuOpen = undefined;
	    }
	};

	$scope.showAdvanced = function(ev) {
	    $mdDialog.show({
		controller: DialogController,
		templateUrl: 'templates/nova-compra.html',
		parent: angular.element(document.body),
		targetEvent: ev,
		clickOutsideToClose:true,
		fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
	    })
		.then(function(answer) {
		    $scope.status = 'You said the information was "' + answer + '".';
		}, function() {
		    $scope.status = 'You cancelled the dialog.';
		});
	};

	$scope.showTransacaoModal = function(event){
	    $mdDialog.show({
		controller: DialogController,
		templateUrl: 'templates/nova-transacao.html',
		parent: angular.element(document.body),
		targetEvent: event,
		clickOutsideToClose: true,
		fullscreen: $scope.customFullscreen,
	    })
		.then(function(answer) {
		    $scope.status = 'You said the information was "' + answer + '".';
		}, function() {
		    $scope.status = 'You cancelled the dialog.';
		});
	};

	$scope.showCompraModal = function(event){
	    $mdDialog.show({
		controller: DialogController,
		templateUrl: 'templates/nova-compra.html',
		parent: angular.element(document.body),
		targetEvent: event,
		clickOutsideToClose: true,
		fullscreen: $scope.customFullscreen,
	    })
		.then(function(answer) {
		    $scope.status = 'You said the information was "' + answer + '".';
		}, function() {
		    $scope.status = 'You cancelled the dialog.';
		});
	};


	$scope.showPessoaModal = function(event){
	    $mdDialog.show({
		controller: DialogController,
		templateUrl: 'templates/nova-pessoa.html',
		parent: angular.element(document.body),
		targetEvent: event,
		clickOutsideToClose: true,
		fullscreen: $scope.customFullscreen,
	    })
		.then(function(answer) {
		    $scope.status = 'You said the information was "' + answer + '".';
		}, function() {
		    $scope.status = 'You cancelled the dialog.';
		});
	};

	$scope.showLivroModal = function(event){
	    $mdDialog.show({
		controller: DialogController,
		templateUrl: 'templates/novo-livro.html',
		parent: angular.element(document.body),
		targetEvent: event,
		clickOutsideToClose: true,
		fullscreen: $scope.customFullscreen,
	    })
		.then(function(answer) {
		    $scope.status = 'You said the information was "' + answer + '".';
		}, function() {
		    $scope.status = 'You cancelled the dialog.';
		});
	};

	$scope.showCdModal = function(event){
	    $mdDialog.show({
		controller: DialogController,
		templateUrl: 'templates/novo-cd.html',
		parent: angular.element(document.body),
		targetEvent: event,
		clickOutsideToClose: true,
		fullscreen: $scope.customFullscreen,
	    })
		.then(function(answer) {
		    $scope.status = 'You said the information was "' + answer + '".';
		}, function() {
		    $scope.status = 'You cancelled the dialog.';
		});
	};

	function DialogController($scope, $mdDialog) {
	    $scope.hide = function() {
		$mdDialog.hide();
	    };

	    $scope.cancel = function() {
		$mdDialog.cancel();
	    };

	    $scope.answer = function(answer) {
		$mdDialog.hide(answer);
	    };
	}
    })



    .controller("controladorTeste" , ['$scope', 'databaseService', function($scope, databaseService) {
	$scope.novoProduto;
	$scope.novoValor;
	$scope.novaData;
	$scope.novaPessoa;

	$scope.soma;
	this.$onInit = function(){
	    $scope.tabShown = 'compras';
	    databaseService.getCompraSum().then(function(response){
		$scope.soma = response.data.rows[0].sum;
	    },function(error){
		throw error;
	    });
	}
	
	$scope.changeTab = function(tabname){
	    $scope.tabShown = tabname;
	};

	$scope.isTabShown = function(tab){
	    if(tab > $scope.tabShown){
		return false;
	    } else if($scope.tabShown > tab){
		return false;
	    } else{
		return true;
	    }
	};
    }])

    .directive('adicionarCompra', function(){
	return {
	    restrict: 'E',
	    templateUrl: 'templates/adicionar-compra.html',
	    scope: true,
	    transclude: true,
	    controller: function($scope){
		$scope.hidden = true;
		$scope.open = function(){
		    $scope.hidden=false;
		};
	    },
	    link: function( scope,ele,attrs ) {
		$( ele ).find( '.trans-layer' ).on( 'click', function( event ) {
		    scope.hidden = true;
		    scope.$apply();
		})
		$(ele).find('.trans-layer').keypress( function(event){
		    scope.hidden=true;
		    scope.$apply();
		});
	    },
	}
    })

    .directive('tabelaCompra', function(){
	return {
	    restrict: 'E',
	    templateUrl:'templates/tabelaCompraTemplate.html',
	    scope: true,
	    controller: ['$scope', 'databaseService', function($scope, databaseService){
		$scope.compraOrder = 'data';
		this.$onInit = function(){
		    $scope.compraOrder = 'data';
		    $scope.compraSelecionada = {};
		    $scope.compras;
		    // $scope.editavel = false;
		    
		    databaseService.getCompraAll().then(function(response){
			$scope.compras = response.data.rows;
			$scope.compras.forEach( (item, index) => {
			    item.preco = Number(item.preco);
			    item.data = new Date(item.data);
			} );
		    }, function(error){
			throw error;
		    });
		}
		
		$scope.changeFilter = function(x){
		    $scope.compraOrder = x;
		};

		$scope.editarCompra = function(compra){
		    $scope.compraSelecionada = angular.copy(compra);
		};

		$scope.procuraCompra = function(){

		    var id = $scope.compraSelecionada.id;
		    var resultado = -1;
		    for( i=0 ; i<$scope.compras.length ; i++){
			if($scope.compras[i].id == id){
			    resultado = i;
			    continue;
			}
		    }
		    return resultado;
		}
		
		$scope.salvarCompra = function(idx){
		    angular.copy($scope.compras[idx], $scope.compraSelecionada);
		    $scope.resetar();
		};

		$scope.resetar = function(){
		    $scope.compraSelecionada = {};
		};

		$scope.deletaCompra = function(compra){
		    
		};
	    }],
	}
    })

    .directive('tabelaTransacao', function(){
	return {
	    restrict: 'E',
	    templateUrl:'templates/tabelaTransacaoTemplate.html',
	    scope: true,
	    controller: ['$scope', 'databaseService', function($scope, databaseService){
		$scope.transacaoOrder = 'data';
		this.$onInit = function(){
		    $scope.transacaoOrder = 'data';
		    $scope.transacaoSelecionada = {};
		    $scope.transacoes;
		    // $scope.editavel = false;

		    
		    databaseService.getTransacaoAll().then(function(response){
			$scope.transacoes = response.data.rows;
			$scope.transacoes.forEach( (item, index) => {
			    item.valor = Number(item.valor);
			    item.data = new Date(item.data);
			} );
		    }, function(error){
			throw error;
		    });
		}
		
		$scope.changeFilter = function(x){
		    $scope.transacaoOrder = x;
		};

		$scope.editarTransacao = function(transacao){
		    $scope.transacaoSelecionada = angular.copy(transacao);
		};
		
		$scope.salvarTransacao = function(idx){
		    angular.copy($scope.transacoes[idx], $scope.transacaoSelecionada);
		    $scope.resetar();
		};

		$scope.resetar = function(){
		    $scope.transacaoSelecionada = {};
		};

		$scope.deletaTransacao = function(transacao){
		    
		};
	    }],
	}
    })

    .directive('tabelaPessoa', function(){
	return {
	    restrict: 'E',
	    templateUrl:'templates/tabelaPessoaTemplate.html',
	    scope: true,
	    controller: ['$scope', 'databaseService', function($scope, databaseService){
		$scope.pessoaOrder = 'nome';

		this.$onInit = function(){
		    $scope.pessoaSelecionada = {};
		    $scope.pessoas;
		    
		    databaseService.getPessoaAll().then(function(response){
			$scope.pessoas = response.data.rows;
			// $scope.pessoas.forEach( (item, index) => {
			//     item["associado?"] = 
			// } );
		    }, function(error){
			throw error;
		    });
		}
		
		$scope.changeFilter = function(x){
		    $scope.pessoaOrder = x;
		};

		$scope.getTemplate = function(pessoa){
		    if (pessoa.id === $scope.pessoaSelecionada.id) {
			return 'templates/editable-pessoa-cell.html';
		    }else{
			return 'templates/normal-pessoa-cell.html';
		    } 
		};

		$scope.editarPessoa = function(pessoa){
		    $scope.pessoaSelecionada = angular.copy(pessoa);
		};
		
		$scope.salvarPessoa = function(idx){
		    angular.copy($scope.pessoas[idx], $scope.pessoaSelecionada);
		    $scope.resetar();
		};

		$scope.resetar = function(){
		    $scope.pessoaSelecionada = {};
		};

		$scope.deletaPessoa = function(pessoa){
		    
		};
	    }],
	}
    })

    .directive('tabelaCd', function(){
	return {
	    restrict: 'E',
	    templateUrl:'templates/tabelaCdTemplate.html',
	    scope: true,
	    controller: ['$scope', 'databaseService', function($scope, databaseService){
		$scope.cdOrder = 'numero';
		$scope.cdSelecionado = {};
		$scope.cds;

		this.$onInit = function(){
		    databaseService.getProdutosCdsAll().then(function(response){
			$scope.cds = response.data.rows;
			// $scope.cds.forEach( (item, index) => {
			//     item.preco = Number(item.preco);
			//     item.data = new Date(item.data);
			// } );
		    }, function(error){
			throw error;
		    });
		}
		
		$scope.changeFilter = function(x){
		    $scope.cdOrder = x;
		};

		$scope.getTemplate = function(cd){
		    if (cd.id === $scope.cdSelecionado.id) {
			return 'templates/editable-cd-cell.html';
		    }else{
			return 'templates/normal-cd-cell.html';
		    } 
		};

		$scope.editarCd = function(cd){
		    $scope.cdSelecionado = angular.copy(cd);
		};
		
		$scope.salvarCd = function(idx){
		    angular.copy($scope.cds[idx], $scope.cdSelecionado);
		    $scope.resetar();
		};

		$scope.resetar = function(){
		    $scope.cdSelecionado = {};
		};

		$scope.deletaCd = function(cd){
		    
		};
	    }],
	}
    })

    .directive('tabelaLivro', function(){
	return {
	    restrict: 'E',
	    templateUrl:'templates/tabelaLivroTemplate.html',
	    scope: true,
	    controller: ['$scope', 'databaseService', function($scope, databaseService){
		$scope.livroOrder = 'titulo';
		$scope.livroSelecionado = {};
		$scope.livros;

		this.$onInit = function(){
		    databaseService.getProdutosLivrosAll().then(function(response){
			$scope.livros = response.data.rows;
			// $scope.livros.forEach( (item, index) => {
			//     item.preco = Number(item.preco);
			//     item.data = new Date(item.data);
			// } );
		    }, function(error){
			throw error;
		    });
		}
		
		$scope.changeFilter = function(x){
		    $scope.livroOrder = x;
		};

		$scope.getTemplate = function(livro){
		    if (livro.id === $scope.livroSelecionado.id) {
			return 'templates/editable-livro-cell.html';
		    }else{
			return 'templates/normal-livro-cell.html';
		    } 
		};

		$scope.editarLivro = function(livro){
		    $scope.livroSelecionado = angular.copy(livro);
		};
		
		$scope.salvarLivro = function(idx){
		    angular.copy($scope.livros[idx], $scope.livroSelecionado);
		    $scope.resetar();
		};

		$scope.resetar = function(){
		    $scope.livroSelecionada = {};
		};

		$scope.deletaLivro = function(livro){
		    
		};
	    }],
	}
    })

//   adiciona o 'R' no filtro de currency
//   é para ser usado logo depois do filtro de currency
//   exemplo:
//   [dinheiro] | currency | R$
    .filter('R$', function(){
	return function(text){
	    return 'R' + text;
	}
    });
