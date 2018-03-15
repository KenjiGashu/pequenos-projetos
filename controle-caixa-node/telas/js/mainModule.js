angular.module("mainModule", ['ngMaterial', 'databaseAccessModule'])



    .controller('DialogCtrl', function($scope, $mdDialog) {
	$scope.status = '  ';
	$scope.customFullscreen = false;

	$scope.showAdvanced = function(ev) {
	    $mdDialog.show({
		controller: DialogController,
		templateUrl: '/telas/templates/nova-compra.html',
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
	
	
	this.$onInit = function(){
	    $scope.tabShown = 'compras';
	    console.log('on init esta sendo chamado em ControladorTeste\n Valor de TabShown= ' + $scope.tabShown);
	}
	var tabShown;
	$scope.novoProduto;
	$scope.novoValor;
	$scope.novaData;
	$scope.novaPessoa;

	$scope.soma;

	$scope.rowOrder = 'data';

	$scope.compras;
	$scope.livros;
	$scope.pessoas;
	$scope.cds;

	$scope.changeFilter = function(x){
	    $scope.rowOrder = x;
	}

	$scope.selectedRow = {};


	
	$scope.changeTab = function(tabname){
	    $scope.tabShown = tabname;
	    console.log('tabShown value: ' + $scope.tabShown);
	};

	$scope.isTabShown = function(tab){
	    console.log('tab: ' + tab);
	    console.log('tabShown: ' + $scope.tabShown);
	    console.log("comparcao: " + tab.localeCompare($scope.tabShown));
	    if(tab > $scope.tabShown){
		return false;
	    } else if($scope.tabShown > tab){
		return false;
	    } else{
		return true;
	    }
	};

	// gets the template to ng-include for a table row / item
	$scope.getTemplateCompra = function (compra) {
            if (compra.id === $scope.selectedRow.id) return 'templates/editable-cell.html';
            else return 'templates/normal-cell.html';
	};

	$scope.getTemplatePessoa = function (pessoa) {
            if (pessoa.id === $scope.selectedRow.id) return 'templates/editable-pessoa-cell.html';
            else return 'templates/normal-pessoa-cell.html';
	};

	$scope.getTemplateLivro = function (livro) {
            if (livro.id === $scope.selectedRow.id) return 'templates/editable-livro-cell.html';
            else return 'templates/normal-livro-cell.html';
	};

	$scope.getTemplateCd = function (cd) {
            if (cd.id === $scope.selectedRow.id) return 'templates/editable-cd-cell.html';
            else return 'templates/normal-cd-cell.html';
	};

	$scope.editCompra = function (compra) {
            $scope.selectedCompra = angular.copy(compra);
	};

	$scope.saveCompra = function (idx) {
            console.log("Saving contact on idx: " + idx);
	    angular.copy($scope.compras[idx], $scope.selectedCompra);
	    // Object.assign($scope.compras[idx], $scope.selectedCompra);
	    console.log($scope.compras);
            // $scope.compras[idx] = angular.copy($scope.selectedCompra);
            $scope.reset();
	};

	$scope.reset = function () {
            $scope.selectedRow = {};
	};

	$scope.deletaRow = function(row){
	    
	};

	//select de todas as compras

	databaseService.getSoma().then(function(response){
	    console.log('soma: ');
	    console.log(response.data.rows[0].sum);
	    $scope.soma = response.data.rows[0].sum;
	},function(error){
	    throw error;
	});
	
	databaseService.getCompraAll().then(function(response){
	    $scope.compras = response.data.rows;
	    $scope.compras.forEach( (item, index) => {
		item.preco = Number(item.preco);
		item.data = new Date(item.data);
	    } );
	    console.log('compras: ');
	    console.log(response.data.rows);
	}, function(error){
	    throw error;
	});

	databaseService.getProdutosLivrosAll().then(function(response){
	    $scope.livros = response.data.rows;
	    console.log('livros: ');
	    console.log($scope.livros);
	}, function(error){
	    throw error;
	});

	databaseService.getProdutosCdsAll().then(function(response){
	    $scope.cds = response.data.rows;
	    console.log('cds: ');
	    console.log($scope.cds);
	}, function(error){
	    throw error;
	});

	databaseService.getPessoaAll().then(function(response){
	    $scope.pessoas = response.data.rows;
	    console.log('pessoas: ');
	    console.log($scope.pessoas);
	}, function(error){
	    throw error;
	});

	$scope.rowSelecionada;

	// $scope.selecionaRow = function(row){
	//     $scope.rowSelecionada = row;
	//     console.log($scope.rowSelecionada);
	// }
    }])

    .directive('adicionarCompra', function(){
	return {
	    restrict: 'E',
	    template: '/telas/templates/adicionar-compra.html',
	    scope: true,
	    transclude: true,
	    controller: function($scope){
		$scope.hidden = true;
		console.log('controlador'+$scope);
		$scope.open = function(){
		    $scope.hidden=false;
		};
		$scope.teste = function(){
		    console.log('oi, goku');
		}
	    },
	    link: function( scope,ele,attrs ) {
		$( ele ).find( '.trans-layer' ).on( 'click', function( event ) {
		    console.log(ele);
		    scope.hidden = true;
		    scope.$apply();
		})
		$(ele).find('.trans-layer').keypress( function(event){
		    console.log('keypress' + event);
		    scope.hidden=true;
		    scope.$apply();
		});
	    },
	}
    })

    .filter('R$', function(){
	return function(text){
	    return 'R' + text;
	}
    });
