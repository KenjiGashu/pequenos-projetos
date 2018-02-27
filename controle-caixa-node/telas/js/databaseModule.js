angular.module('databaseModule', ['$http', function($http){
    function getPessoa(nome){
	$http({
	    method: 'GET',
	    url: '/dbservice/pessoa/nome/' + nome,
	}).then(function successCallback(response) {
	    console.log(response);
	}, function errorCallback(response) {
	    console.log(response);
	});
    };
}]);
