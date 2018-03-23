angular.module("testModule", ['databaseAccessModule'])
    .controller('mockController', ['$scope', function($scope){
	$scope.umafunc = function(){
	    return {nome: 'nome'};
	};
	$scope.pessoaAll = {
	    "command": "SELECT",
	    "rowCount": 1,
	    "oid": null,
	    "rows": [{
		"id": "6",
		"nome": "ruju",
		"associado?": true,
		"cpf": "7361524214",
		"rg": "264758371",
		"telefone": null
	    }, {
		"id": "3",
		"nome": "sucupira",
		"associado?": true,
		"cpf": "7361524214",
		"rg": "264758371",
		"telefone": '982827'
	    }],
	    "fields": [{
		"name": "id",
		"tableID": 16631,
		"columnID": 1,
		"dataTypeID": 20,
		"dataTypeSize": 8,
		"dataTypeModifier": -1,
		"format": "text"
	    }, {
		"name": "nome",
		"tableID": 16631,
		"columnID": 2,
		"dataTypeID": 1043,
		"dataTypeSize": -1,
		"dataTypeModifier": 259,
		"format": "text"
	    }, {
		"name": "associado?",
		"tableID": 16631,
		"columnID": 3,
		"dataTypeID": 16,
		"dataTypeSize": 1,
		"dataTypeModifier": -1,
		"format": "text"
	    }, {
		"name": "cpf",
		"tableID": 16631,
		"columnID": 4,
		"dataTypeID": 1043,
		"dataTypeSize": -1,
		"dataTypeModifier": 18,
		"format": "text"
	    }, {
		"name": "rg",
		"tableID": 16631,
		"columnID": 5,
		"dataTypeID": 1043,
		"dataTypeSize": -1,
		"dataTypeModifier": 18,
		"format": "text"
	    }, {
		"name": "telefone",
		"tableID": 16631,
		"columnID": 6,
		"dataTypeID": 1043,
		"dataTypeSize": -1,
		"dataTypeModifier": 24,
		"format": "text"
	    }],
	    "_parsers": [null, null, null, null, null, null],
	    "rowAsArray": false
	};

	$scope.pessoaRuju = {
	    "command": "SELECT",
	    "rowCount": 1,
	    "oid": null,
	    "rows": [
		{
		    "id": "6",
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": 'oi, eu sou'
		}
	    ],
	    "fields": [
		{
		    "name": "id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "nome",
		    "tableID": 16631,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "associado?",
		    "tableID": 16631,
		    "columnID": 3,
		    "dataTypeID": 16,
		    "dataTypeSize": 1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cpf",
		    "tableID": 16631,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "rg",
		    "tableID": 16631,
		    "columnID": 5,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "telefone",
		    "tableID": 16631,
		    "columnID": 6,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 24,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};

	$scope.livroNatura = {
	    "command": "SELECT",
	    "rowCount": 3,
	    "oid": null,
	    "rows": [
		{
		    "livro_id": "7",
		    "produto_id": "15",
		    "id": "7",
		    "titulo": "ue wo muite",
		    "autor": "tetsushi harada",
		    "editora": "natura",
		    "id_produto": 15,
		    "id_preco": 7,
		    "preco": "11.02",
		    "data_inicio": "2018-01-17T02:00:00.000Z",
		    "data_fim": "2018-02-17T02:00:00.000Z",
		    "quantidade": 1000
		},
		{
		    "livro_id": "8",
		    "produto_id": "16",
		    "id": "8",
		    "titulo": "karada ga naiteiru toki",
		    "autor": "tetsushi harada",
		    "editora": "natura",
		    "id_produto": 16,
		    "id_preco": 8,
		    "preco": "43.02",
		    "data_inicio": "2018-01-01T02:00:00.000Z",
		    "data_fim": "2018-02-21T03:00:00.000Z",
		    "quantidade": 2000
		},
		{
		    "livro_id": "9",
		    "produto_id": "17",
		    "id": "9",
		    "titulo": "itsumo boku wa",
		    "autor": "tetsushi harada",
		    "editora": "natura",
		    "id_produto": 17,
		    "id_preco": 9,
		    "preco": "33.02",
		    "data_inicio": "2018-01-12T02:00:00.000Z",
		    "data_fim": "2018-02-26T03:00:00.000Z",
		    "quantidade": 3400
		}
	    ],
	    "fields": [
		{
		    "name": "livro_id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "produto_id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16620,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "quantidade",
		    "tableID": 16620,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};


	$scope.cdTema = {
	    "command": "SELECT",
	    "rowCount": 2,
	    "oid": null,
	    "rows": [
		{
		    "cd_numero": 1,
		    "produto_id": "2",
		    "numero": 1,
		    "tema": "um tema qualquer",
		    "id_produto": 2,
		    "id": "2",
		    "id_preco": 2,
		    "preco": "13.2",
		    "data_inicio": "2010-10-17T03:00:00.000Z",
		    "data_fim": "2010-08-02T03:00:00.000Z",
		    "quantidade": 100
		},
		{
		    "cd_numero": 76,
		    "produto_id": "5",
		    "numero": 76,
		    "tema": "esse tema eh muito bom 76",
		    "id_produto": 5,
		    "id": "5",
		    "id_preco": 5,
		    "preco": "25.98",
		    "data_inicio": "2018-01-01T02:00:00.000Z",
		    "data_fim": "2018-02-04T02:00:00.000Z",
		    "quantidade": 250
		}
	    ],
	    "fields": [
		{
		    "name": "cd_numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "produto_id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16620,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "quantidade",
		    "tableID": 16620,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};


	$scope.livroTetsushi = {
	    "command": "SELECT",
	    "rowCount": 4,
	    "oid": null,
	    "rows": [
		{
		    "livro_id": "6",
		    "produto_id": "11",
		    "id": "3",
		    "titulo": "nanda kore",
		    "autor": "tetsushi",
		    "editora": "akala hangaru",
		    "id_produto": 11,
		    "id_preco": 3,
		    "preco": "12.2",
		    "data_inicio": "2010-10-17T03:00:00.000Z",
		    "data_fim": "2010-08-02T03:00:00.000Z",
		    "quantidade": 250
		},
		{
		    "livro_id": "7",
		    "produto_id": "15",
		    "id": "7",
		    "titulo": "ue wo muite",
		    "autor": "tetsushi harada",
		    "editora": "natura",
		    "id_produto": 15,
		    "id_preco": 7,
		    "preco": "11.02",
		    "data_inicio": "2018-01-17T02:00:00.000Z",
		    "data_fim": "2018-02-17T02:00:00.000Z",
		    "quantidade": 1000
		},
		{
		    "livro_id": "8",
		    "produto_id": "16",
		    "id": "8",
		    "titulo": "karada ga naiteiru toki",
		    "autor": "tetsushi harada",
		    "editora": "natura",
		    "id_produto": 16,
		    "id_preco": 8,
		    "preco": "43.02",
		    "data_inicio": "2018-01-01T02:00:00.000Z",
		    "data_fim": "2018-02-21T03:00:00.000Z",
		    "quantidade": 2000
		},
		{
		    "livro_id": "9",
		    "produto_id": "17",
		    "id": "9",
		    "titulo": "itsumo boku wa",
		    "autor": "tetsushi harada",
		    "editora": "natura",
		    "id_produto": 17,
		    "id_preco": 9,
		    "preco": "33.02",
		    "data_inicio": "2018-01-12T02:00:00.000Z",
		    "data_fim": "2018-02-26T03:00:00.000Z",
		    "quantidade": 3400
		}
	    ],
	    "fields": [
		{
		    "name": "livro_id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "produto_id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16620,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "quantidade",
		    "tableID": 16620,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};

	$scope.livroNandaKore = {
	    "command": "SELECT",
	    "rowCount": 1,
	    "oid": null,
	    "rows": [
		{
		    "livro_id": "6",
		    "produto_id": "11",
		    "id": "3",
		    "titulo": "nanda kore",
		    "autor": "tetsushi",
		    "editora": "akala hangaru",
		    "id_produto": 11,
		    "id_preco": 3,
		    "preco": "12.2",
		    "data_inicio": "2010-10-17T03:00:00.000Z",
		    "data_fim": "2010-08-02T03:00:00.000Z",
		    "quantidade": 250
		}
	    ],
	    "fields": [
		{
		    "name": "livro_id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "produto_id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16620,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "quantidade",
		    "tableID": 16620,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};

	$scope.cd50 = {
	    "command": "SELECT",
	    "rowCount": 1,
	    "oid": null,
	    "rows": [
		{
		    "cd_numero": 50,
		    "produto_id": "4",
		    "numero": 50,
		    "tema": "cd de numero 50",
		    "id_produto": 4,
		    "id": "4",
		    "id_preco": 4,
		    "preco": "8.22",
		    "data_inicio": "2010-11-17T02:00:00.000Z",
		    "data_fim": "2010-04-02T03:00:00.000Z",
		    "quantidade": 200
		}
	    ],
	    "fields": [
		{
		    "name": "cd_numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "produto_id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16620,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "quantidade",
		    "tableID": 16620,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	}

	$scope.compraLivroTitulo = {
	    "command": "SELECT",
	    "rowCount": 1,
	    "oid": null,
	    "rows": [
		{
		    "compra_id": "7",
		    "id": "8",
		    "id_produto": null,
		    "id_pessoa": 3,
		    "data": "2018-02-20T03:00:00.000Z",
		    "id_preco": 8,
		    "titulo": "o titulo nao faz sentido",
		    "autor": "berinjela bife",
		    "editora": "uma editora que ninguem gosta",
		    "numero": null,
		    "tema": null,
		    "nome": "coruja",
		    "associado?": true,
		    "cpf": "1726352512",
		    "rg": "9398572o9",
		    "telefone": null,
		    "preco": "43.02",
		    "data_inicio": "2018-01-01T02:00:00.000Z",
		    "data_fim": "2018-02-21T03:00:00.000Z"
		}
	    ],
	    "fields": [
		{
		    "name": "compra_id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16606,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_pessoa",
		    "tableID": 16606,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data",
		    "tableID": 16606,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "nome",
		    "tableID": 16631,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "associado?",
		    "tableID": 16631,
		    "columnID": 3,
		    "dataTypeID": 16,
		    "dataTypeSize": 1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cpf",
		    "tableID": 16631,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "rg",
		    "tableID": 16631,
		    "columnID": 5,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "telefone",
		    "tableID": 16631,
		    "columnID": 6,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 24,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};

	$scope.compraPessoaRuju = {
	    "command": "SELECT",
	    "rowCount": 3,
	    "oid": null,
	    "rows": [
		{
		    "compra_id": "14",
		    "id": "3",
		    "id_produto": null,
		    "id_pessoa": 6,
		    "data": "2018-01-20T02:00:00.000Z",
		    "id_preco": 3,
		    "titulo": "nanda kore",
		    "autor": "tetsushi",
		    "editora": "akala hangaru",
		    "numero": null,
		    "tema": null,
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": null,
		    "preco": "12.2",
		    "data_inicio": "2010-10-17T03:00:00.000Z",
		    "data_fim": "2010-08-02T03:00:00.000Z"
		},
		{
		    "compra_id": "13",
		    "id": "4",
		    "id_produto": 12,
		    "id_pessoa": 6,
		    "data": "2018-01-20T02:00:00.000Z",
		    "id_preco": 4,
		    "titulo": null,
		    "autor": null,
		    "editora": null,
		    "numero": 3,
		    "tema": "o terceiro rei de cou",
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": null,
		    "preco": "8.22",
		    "data_inicio": "2010-11-17T02:00:00.000Z",
		    "data_fim": "2010-04-02T03:00:00.000Z"
		},
		{
		    "compra_id": "15",
		    "id": "4",
		    "id_produto": 12,
		    "id_pessoa": 6,
		    "data": "2018-01-19T02:00:00.000Z",
		    "id_preco": 4,
		    "titulo": null,
		    "autor": null,
		    "editora": null,
		    "numero": 3,
		    "tema": "o terceiro rei de cou",
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": null,
		    "preco": "8.22",
		    "data_inicio": "2010-11-17T02:00:00.000Z",
		    "data_fim": "2010-04-02T03:00:00.000Z"
		}
	    ],
	    "fields": [
		{
		    "name": "compra_id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16606,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_pessoa",
		    "tableID": 16606,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data",
		    "tableID": 16606,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "nome",
		    "tableID": 16631,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "associado?",
		    "tableID": 16631,
		    "columnID": 3,
		    "dataTypeID": 16,
		    "dataTypeSize": 1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cpf",
		    "tableID": 16631,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "rg",
		    "tableID": 16631,
		    "columnID": 5,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "telefone",
		    "tableID": 16631,
		    "columnID": 6,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 24,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	}

	$scope.compraLivroTetsushi = {
	    "command": "SELECT",
	    "rowCount": 5,
	    "oid": null,
	    "rows": [
		{
		    "compra_id": "14",
		    "id": "3",
		    "id_produto": null,
		    "id_pessoa": 6,
		    "data": "2018-01-20T02:00:00.000Z",
		    "id_preco": 3,
		    "titulo": "nanda kore",
		    "autor": "tetsushi",
		    "editora": "akala hangaru",
		    "numero": null,
		    "tema": null,
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": null,
		    "preco": "12.2",
		    "data_inicio": "2010-10-17T03:00:00.000Z",
		    "data_fim": "2010-08-02T03:00:00.000Z"
		},
		{
		    "compra_id": "11",
		    "id": "3",
		    "id_produto": null,
		    "id_pessoa": 5,
		    "data": "2018-01-21T02:00:00.000Z",
		    "id_preco": 3,
		    "titulo": "nanda kore",
		    "autor": "tetsushi",
		    "editora": "akala hangaru",
		    "numero": null,
		    "tema": null,
		    "nome": "algoritmo",
		    "associado?": false,
		    "cpf": "38272647328",
		    "rg": "7463829471",
		    "telefone": null,
		    "preco": "12.2",
		    "data_inicio": "2010-10-17T03:00:00.000Z",
		    "data_fim": "2010-08-02T03:00:00.000Z"
		},
		{
		    "compra_id": "20",
		    "id": "7",
		    "id_produto": null,
		    "id_pessoa": 3,
		    "data": "2018-01-17T02:00:00.000Z",
		    "id_preco": 7,
		    "titulo": "ue wo muite",
		    "autor": "tetsushi harada",
		    "editora": "natura",
		    "numero": null,
		    "tema": null,
		    "nome": "coruja",
		    "associado?": true,
		    "cpf": "1726352512",
		    "rg": "9398572o9",
		    "telefone": null,
		    "preco": "11.02",
		    "data_inicio": "2018-01-17T02:00:00.000Z",
		    "data_fim": "2018-02-17T02:00:00.000Z"
		},
		{
		    "compra_id": "21",
		    "id": "8",
		    "id_produto": null,
		    "id_pessoa": 4,
		    "data": "2018-01-11T02:00:00.000Z",
		    "id_preco": 8,
		    "titulo": "karada ga naiteiru toki",
		    "autor": "tetsushi harada",
		    "editora": "natura",
		    "numero": null,
		    "tema": null,
		    "nome": "kakaroto",
		    "associado?": false,
		    "cpf": "837464837",
		    "rg": "137466712",
		    "telefone": null,
		    "preco": "43.02",
		    "data_inicio": "2018-01-01T02:00:00.000Z",
		    "data_fim": "2018-02-21T03:00:00.000Z"
		},
		{
		    "compra_id": "22",
		    "id": "9",
		    "id_produto": null,
		    "id_pessoa": 5,
		    "data": "2018-01-06T02:00:00.000Z",
		    "id_preco": 9,
		    "titulo": "itsumo boku wa",
		    "autor": "tetsushi harada",
		    "editora": "natura",
		    "numero": null,
		    "tema": null,
		    "nome": "algoritmo",
		    "associado?": false,
		    "cpf": "38272647328",
		    "rg": "7463829471",
		    "telefone": null,
		    "preco": "33.02",
		    "data_inicio": "2018-01-12T02:00:00.000Z",
		    "data_fim": "2018-02-26T03:00:00.000Z"
		}
	    ],
	    "fields": [
		{
		    "name": "compra_id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16606,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_pessoa",
		    "tableID": 16606,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data",
		    "tableID": 16606,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "nome",
		    "tableID": 16631,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "associado?",
		    "tableID": 16631,
		    "columnID": 3,
		    "dataTypeID": 16,
		    "dataTypeSize": 1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cpf",
		    "tableID": 16631,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "rg",
		    "tableID": 16631,
		    "columnID": 5,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "telefone",
		    "tableID": 16631,
		    "columnID": 6,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 24,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};


	$scope.compraCd50 = {
	    "command": "SELECT",
	    "rowCount": 1,
	    "oid": null,
	    "rows": [
		{
		    "compra_id": "3",
		    "id": "4",
		    "id_produto": 4,
		    "id_pessoa": 2,
		    "data": "2018-01-12T02:00:00.000Z",
		    "id_preco": 4,
		    "titulo": null,
		    "autor": null,
		    "editora": null,
		    "numero": 50,
		    "tema": "cd de numero 50",
		    "nome": "lembraujo",
		    "associado?": true,
		    "cpf": "6263520391",
		    "rg": "72646373",
		    "telefone": null,
		    "preco": "8.22",
		    "data_inicio": "2010-11-17T02:00:00.000Z",
		    "data_fim": "2010-04-02T03:00:00.000Z"
		}
	    ],
	    "fields": [
		{
		    "name": "compra_id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16606,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_pessoa",
		    "tableID": 16606,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data",
		    "tableID": 16606,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "nome",
		    "tableID": 16631,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "associado?",
		    "tableID": 16631,
		    "columnID": 3,
		    "dataTypeID": 16,
		    "dataTypeSize": 1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cpf",
		    "tableID": 16631,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "rg",
		    "tableID": 16631,
		    "columnID": 5,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "telefone",
		    "tableID": 16631,
		    "columnID": 6,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 24,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};

	$scope.compraLivroOPrimeiro = {
	    "command": "SELECT",
	    "rowCount": 2,
	    "oid": null,
	    "rows": [
		{
		    "compra_id": "6",
		    "id": "7",
		    "id_produto": null,
		    "id_pessoa": 4,
		    "data": "2018-02-12T02:00:00.000Z",
		    "id_preco": 7,
		    "titulo": "o primeiro livro",
		    "autor": "o autor vcs ja conhecem",
		    "editora": "a editora secreta",
		    "numero": null,
		    "tema": null,
		    "nome": "kakaroto",
		    "associado?": false,
		    "cpf": "837464837",
		    "rg": "137466712",
		    "telefone": null,
		    "preco": "11.02",
		    "data_inicio": "2018-01-17T02:00:00.000Z",
		    "data_fim": "2018-02-17T02:00:00.000Z"
		},
		{
		    "compra_id": "5",
		    "id": "7",
		    "id_produto": null,
		    "id_pessoa": 3,
		    "data": "2018-02-12T02:00:00.000Z",
		    "id_preco": 7,
		    "titulo": "o primeiro livro",
		    "autor": "o autor vcs ja conhecem",
		    "editora": "a editora secreta",
		    "numero": null,
		    "tema": null,
		    "nome": "coruja",
		    "associado?": true,
		    "cpf": "1726352512",
		    "rg": "9398572o9",
		    "telefone": null,
		    "preco": "11.02",
		    "data_inicio": "2018-01-17T02:00:00.000Z",
		    "data_fim": "2018-02-17T02:00:00.000Z"
		}
	    ],
	    "fields": [
		{
		    "name": "compra_id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16606,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16606,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_pessoa",
		    "tableID": 16606,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data",
		    "tableID": 16606,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "nome",
		    "tableID": 16631,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "associado?",
		    "tableID": 16631,
		    "columnID": 3,
		    "dataTypeID": 16,
		    "dataTypeSize": 1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cpf",
		    "tableID": 16631,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "rg",
		    "tableID": 16631,
		    "columnID": 5,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "telefone",
		    "tableID": 16631,
		    "columnID": 6,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 24,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};

	$scope.compraSum = {
	    "command": "SELECT",
	    "rowCount": 1,
	    "oid": null,
	    "rows": [
		{
		    "sum": "406.12"
		}
	    ],
	    "fields": [
		{
		    "name": "sum",
		    "tableID": 0,
		    "columnID": 0,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null
	    ],
	    "rowAsArray": false
	};

	$scope.transacaoRuju = {
	    "command": "SELECT",
	    "rowCount": 3,
	    "oid": null,
	    "rows": [
		{
		    "transacao_id": 11,
		    "pessoa_id": "6",
		    "livro_id": "6",
		    "cd_numero": null,
		    "id": "3",
		    "valor": "12.2",
		    "descricao": "compra de produto",
		    "id_pessoa": 6,
		    "id_produto": null,
		    "data": "2018-01-20T02:00:00.000Z",
		    "id_preco": 3,
		    "titulo": "nanda kore",
		    "autor": "tetsushi",
		    "editora": "akala hangaru",
		    "numero": null,
		    "tema": null,
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": null,
		    "preco": "12.2",
		    "data_inicio": "2010-10-17T03:00:00.000Z",
		    "data_fim": "2010-08-02T03:00:00.000Z"
		},
		{
		    "transacao_id": 13,
		    "pessoa_id": "6",
		    "livro_id": null,
		    "cd_numero": 3,
		    "id": "4",
		    "valor": "8.22",
		    "descricao": "compra de produto",
		    "id_pessoa": 6,
		    "id_produto": 12,
		    "data": "2018-01-19T02:00:00.000Z",
		    "id_preco": 4,
		    "titulo": null,
		    "autor": null,
		    "editora": null,
		    "numero": 3,
		    "tema": "o terceiro rei de cou",
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": null,
		    "preco": "8.22",
		    "data_inicio": "2010-11-17T02:00:00.000Z",
		    "data_fim": "2010-04-02T03:00:00.000Z"
		},
		{
		    "transacao_id": 14,
		    "pessoa_id": "6",
		    "livro_id": null,
		    "cd_numero": 3,
		    "id": "4",
		    "valor": "8.22",
		    "descricao": "compra de produto",
		    "id_pessoa": 6,
		    "id_produto": 12,
		    "data": "2018-01-20T02:00:00.000Z",
		    "id_preco": 4,
		    "titulo": null,
		    "autor": null,
		    "editora": null,
		    "numero": 3,
		    "tema": "o terceiro rei de cou",
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": null,
		    "preco": "8.22",
		    "data_inicio": "2010-11-17T02:00:00.000Z",
		    "data_fim": "2010-04-02T03:00:00.000Z"
		}
	    ],
	    "fields": [
		{
		    "name": "transacao_id",
		    "tableID": 16712,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "pessoa_id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "livro_id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cd_numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16712,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "valor",
		    "tableID": 16712,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "descricao",
		    "tableID": 16712,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 104,
		    "format": "text"
		},
		{
		    "name": "id_pessoa",
		    "tableID": 16712,
		    "columnID": 4,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16712,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data",
		    "tableID": 16712,
		    "columnID": 6,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "nome",
		    "tableID": 16631,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "associado?",
		    "tableID": 16631,
		    "columnID": 3,
		    "dataTypeID": 16,
		    "dataTypeSize": 1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cpf",
		    "tableID": 16631,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "rg",
		    "tableID": 16631,
		    "columnID": 5,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "telefone",
		    "tableID": 16631,
		    "columnID": 6,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 24,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};

	$scope.transacaoMango = {
	    "command": "SELECT",
	    "rowCount": 1,
	    "oid": null,
	    "rows": [
		{
		    "transacao_id": 8,
		    "pessoa_id": "3",
		    "livro_id": "3",
		    "cd_numero": null,
		    "id": "8",
		    "valor": "43.02",
		    "descricao": "compra de produto",
		    "id_pessoa": 3,
		    "id_produto": null,
		    "data": "2018-02-20T03:00:00.000Z",
		    "id_preco": 8,
		    "titulo": "mango is not an item",
		    "autor": "lolie elie",
		    "editora": "enfim, sera?",
		    "numero": null,
		    "tema": null,
		    "nome": "coruja",
		    "associado?": true,
		    "cpf": "1726352512",
		    "rg": "9398572o9",
		    "telefone": null,
		    "preco": "43.02",
		    "data_inicio": "2018-01-01T02:00:00.000Z",
		    "data_fim": "2018-02-21T03:00:00.000Z"
		}
	    ],
	    "fields": [
		{
		    "name": "transacao_id",
		    "tableID": 16712,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "pessoa_id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "livro_id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cd_numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16712,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "valor",
		    "tableID": 16712,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "descricao",
		    "tableID": 16712,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 104,
		    "format": "text"
		},
		{
		    "name": "id_pessoa",
		    "tableID": 16712,
		    "columnID": 4,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16712,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data",
		    "tableID": 16712,
		    "columnID": 6,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "nome",
		    "tableID": 16631,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "associado?",
		    "tableID": 16631,
		    "columnID": 3,
		    "dataTypeID": 16,
		    "dataTypeSize": 1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cpf",
		    "tableID": 16631,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "rg",
		    "tableID": 16631,
		    "columnID": 5,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "telefone",
		    "tableID": 16631,
		    "columnID": 6,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 24,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};

	$scope.transacaoTerceiro = {
	    "command": "SELECT",
	    "rowCount": 3,
	    "oid": null,
	    "rows": [
		{
		    "transacao_id": 13,
		    "pessoa_id": "6",
		    "livro_id": null,
		    "cd_numero": 3,
		    "id": "4",
		    "valor": "8.22",
		    "descricao": "compra de produto",
		    "id_pessoa": 6,
		    "id_produto": 12,
		    "data": "2018-01-19T02:00:00.000Z",
		    "id_preco": 4,
		    "titulo": null,
		    "autor": null,
		    "editora": null,
		    "numero": 3,
		    "tema": "o terceiro rei de cou",
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": null,
		    "preco": "8.22",
		    "data_inicio": "2010-11-17T02:00:00.000Z",
		    "data_fim": "2010-04-02T03:00:00.000Z"
		},
		{
		    "transacao_id": 14,
		    "pessoa_id": "6",
		    "livro_id": null,
		    "cd_numero": 3,
		    "id": "4",
		    "valor": "8.22",
		    "descricao": "compra de produto",
		    "id_pessoa": 6,
		    "id_produto": 12,
		    "data": "2018-01-20T02:00:00.000Z",
		    "id_preco": 4,
		    "titulo": null,
		    "autor": null,
		    "editora": null,
		    "numero": 3,
		    "tema": "o terceiro rei de cou",
		    "nome": "ruju",
		    "associado?": true,
		    "cpf": "7361524214",
		    "rg": "264758371",
		    "telefone": null,
		    "preco": "8.22",
		    "data_inicio": "2010-11-17T02:00:00.000Z",
		    "data_fim": "2010-04-02T03:00:00.000Z"
		},
		{
		    "transacao_id": 15,
		    "pessoa_id": "5",
		    "livro_id": null,
		    "cd_numero": 3,
		    "id": "4",
		    "valor": "8.22",
		    "descricao": "compra de produto",
		    "id_pessoa": 5,
		    "id_produto": 12,
		    "data": "2018-01-20T02:00:00.000Z",
		    "id_preco": 4,
		    "titulo": null,
		    "autor": null,
		    "editora": null,
		    "numero": 3,
		    "tema": "o terceiro rei de cou",
		    "nome": "algoritmo",
		    "associado?": false,
		    "cpf": "38272647328",
		    "rg": "7463829471",
		    "telefone": null,
		    "preco": "8.22",
		    "data_inicio": "2010-11-17T02:00:00.000Z",
		    "data_fim": "2010-04-02T03:00:00.000Z"
		}
	    ],
	    "fields": [
		{
		    "name": "transacao_id",
		    "tableID": 16712,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "pessoa_id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "livro_id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cd_numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16712,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "valor",
		    "tableID": 16712,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "descricao",
		    "tableID": 16712,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 104,
		    "format": "text"
		},
		{
		    "name": "id_pessoa",
		    "tableID": 16712,
		    "columnID": 4,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16712,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data",
		    "tableID": 16712,
		    "columnID": 6,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16644,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id_preco",
		    "tableID": 16644,
		    "columnID": 2,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16623,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "titulo",
		    "tableID": 16623,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "autor",
		    "tableID": 16623,
		    "columnID": 3,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "editora",
		    "tableID": 16623,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16623,
		    "columnID": 5,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "numero",
		    "tableID": 16601,
		    "columnID": 1,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "tema",
		    "tableID": 16601,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "id_produto",
		    "tableID": 16601,
		    "columnID": 3,
		    "dataTypeID": 23,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16631,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "nome",
		    "tableID": 16631,
		    "columnID": 2,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 259,
		    "format": "text"
		},
		{
		    "name": "associado?",
		    "tableID": 16631,
		    "columnID": 3,
		    "dataTypeID": 16,
		    "dataTypeSize": 1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "cpf",
		    "tableID": 16631,
		    "columnID": 4,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "rg",
		    "tableID": 16631,
		    "columnID": 5,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 18,
		    "format": "text"
		},
		{
		    "name": "telefone",
		    "tableID": 16631,
		    "columnID": 6,
		    "dataTypeID": 1043,
		    "dataTypeSize": -1,
		    "dataTypeModifier": 24,
		    "format": "text"
		},
		{
		    "name": "id",
		    "tableID": 16636,
		    "columnID": 1,
		    "dataTypeID": 20,
		    "dataTypeSize": 8,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "preco",
		    "tableID": 16636,
		    "columnID": 2,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_inicio",
		    "tableID": 16636,
		    "columnID": 3,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		},
		{
		    "name": "data_fim",
		    "tableID": 16636,
		    "columnID": 4,
		    "dataTypeID": 1082,
		    "dataTypeSize": 4,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	    ],
	    "rowAsArray": false
	};

	$scope.transacaoSum = {
	    "command": "SELECT",
	    "rowCount": 1,
	    "oid": null,
	    "rows": [
		{
		    "sum": "406.12"
		}
	    ],
	    "fields": [
		{
		    "name": "sum",
		    "tableID": 0,
		    "columnID": 0,
		    "dataTypeID": 1700,
		    "dataTypeSize": -1,
		    "dataTypeModifier": -1,
		    "format": "text"
		}
	    ],
	    "_parsers": [
		null
	    ],
	    "rowAsArray": false
	}

    }]);
