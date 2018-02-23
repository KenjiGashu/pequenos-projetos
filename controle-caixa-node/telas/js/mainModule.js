var app = angular.module("mainModule", ['ngMaterial']);



app.controller('DialogCtrl', function($scope, $mdDialog) {
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
});



app.controller("controladorTeste" , function($scope) {

    $scope.changeTab = function(tabname){
	$scope.tabShown = tabname;
    };
    
    this.$onInit = function(){
	$scope.tabShown = 'compras';
	console.log('on init esta sendo chamado em ControladorTeste\n Valor de TabShown= ' + $scope.tabShown);
    }
    $scope.tabShown;
    $scope.novoNome;
    $scope.novoValor;
    $scope.novaData;
    $scope.novaPessoa;
    
    $scope.compras = [
	{
	    name: 'cd-1',
	    valor: 12.52,
	    data: new Date('2018-01-29'),
	    pessoa: 'joao',
	},
	{
	    name: 'livro-1',
	    valor: 28.52,
	    data: new Date('2018-01-30'),
	    pessoa: 'jose',
	},
	{
	    name: 'livro-3',
	    valor: 53.28,
	    data: new Date('2018-01-28'),
	    pessoa: 'jair',
	},
    ];

    $scope.compraSelecionada = {
	name:'oi',
	valor: 10.00,
	data: new Date('2018-01-27'),
	pessoa: 'jaudo',
    };

    $scope.selecionaCompra = function(compra){
	$scope.compraSelecionada.name = compra.name;
	console.log($scope.compraSelecionada);
    }
});

app.directive('adicionarCompra', function(){
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
});
