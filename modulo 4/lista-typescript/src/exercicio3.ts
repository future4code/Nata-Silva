enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function funcao3 (nome: string, anoLancamento: number, genero: string, pontuacao? : number ) {
	if (pontuacao === undefined ) {
    	console.log(`nome: ${nome}, anoLancamento: ${anoLancamento}, genero: ${genero}`)
	}else{
		console.log(`nome: ${nome}, anoLancamento: ${anoLancamento}, genero: ${genero}, pontuacao: ${pontuacao} `)
	}
}
funcao3("Duna", 2021, GENERO.ACAO)