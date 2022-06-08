type dadosDosClientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[],
}


const ContasBanco: dadosDosClientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function saldoNegativo (contas: Array<dadosDosClientes>): dadosDosClientes[] {
	const contasAtualizadas = contas.map((item)=>{
		let debitoTotal = 0
		for (let i of item.debitos) {
			debitoTotal += i
		}
		return ({
			cliente: item.cliente,
			saldoTotal: item.saldoTotal - debitoTotal,
			debitos: []
		})
	})

	const filtragemDosNegativo =  contasAtualizadas.filter(item => item.saldoTotal < 0)


	return filtragemDosNegativo
}

console.log (saldoNegativo (ContasBanco))








