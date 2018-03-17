var db = require('../serverjs/database.js');

var callbackResponse = function(res, data){
    console.log(JSON.parse(data));
};


console.log(db.selectProdutosLivrosTitulo('o primeiro livro').then(function(data){
    return data.rows[0].titulo;
}));
// db.selectProdutosLivrosAutor('tetsushi',callbackResponse, undefined);
// db.selectProdutosLivrosEditora('natura',callbackResponse, undefined);
// db.selectProdutosLivrosAll(callbackResponse, undefined);
// db.selectProdutosCdsTema('agar agar',callbackResponse, undefined);
// db.selectProdutosCdsNumero('3',callbackResponse, undefined);
// db.selectProdutosCdsAll(callbackResponse, undefined);
// db.selectPessoaNome('kakaroto',callbackResponse, undefined);
// db.selectPessoaAssociado(false,callbackResponse, undefined);
// db.selectPessoaCpf('837464837',callbackResponse, undefined);
// db.selectPessoaRg('9398572o9',callbackResponse, undefined);
// db.selectCompraPessoaNome('ruju',callbackResponse, undefined);
// db.selectCompraLivroTitulo('i like to draw singsing',callbackResponse, undefined);
// db.selectCompraCdTema('mais um cd!',callbackResponse, undefined);
	//db.testebd();
// db.selectPessoa('araujo');
// console.log('\n\n\n\n\n\n==========================TESTE SELECT LIVRO TITULO "O PRIMEIRO LIVRO" PRODUTO=========================');
// db.selectProdutosLivrosTitulo("o primeiro livro",callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT LIVRO AUTOR "BERINJELA BIFE" PRODUTO=========================');
// db.selectProdutosLivrosAutor('berinjela bife',callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT EDITORA  "ENFIM, SERA?" PRODUTO=========================');
// db.selectProdutosLivrosEditora('enfim, sera?',callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT LIVRO ALL PRODUTO=========================');
// db.selectProdutosLivrosAll(callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT CD TEMA "UM TEMA, QUALQUER" PRODUTO=========================');
// db.selectProdutosCdsTema('cd de numero 50', callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT CD NUMERO "50" PRODUTO=========================');
// db.selectProdutosCdsNumero(50,callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT CD ALL PRODUTO=========================');
// db.selectProdutosCdsAll(callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT PESSOA NOME "ARAUJO" PRODUTO=========================');
// db.selectPessoaNome('araujo',callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT PESSOA ASSOCIADO TRUE PRODUTO=========================');
// db.selectPessoaAssociado(true,callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELE CT PESSOA CPF "6263520391" PRODUTO=========================');
// db.selectPessoaCpf('6263520391',callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT PESSOA RG "827374859" PRODUTO=========================');
// db.selectPessoaRg('827374859',callbackResponse, undefined);

// console.log('\n\n\n\n\n\n==========================TESTE SELECT COMPRA PESSOA NOME "LEMBRAUJO" PRODUTO=========================');
// db.selectCompraPessoaLivro('lembraujo',callbackResponse, undefined);

