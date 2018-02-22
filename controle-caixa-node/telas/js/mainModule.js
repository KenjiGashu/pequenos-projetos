var app = angular.module("mainModule", []);

app.controller("controladorTeste" , function($scope) {
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
	template: "<a href='#'><i ng-click='open()' class='cor-verde icon-big fas fa-plus-square'>"+
	    "</i></a>"+
	    "<div ng-hide='hidden' class='trans-layer'></div>"+
	    "<div class='modal-container' ng-class='{modalactive: !hidden}' ng-transclude></div>",
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
	},
    }
});
