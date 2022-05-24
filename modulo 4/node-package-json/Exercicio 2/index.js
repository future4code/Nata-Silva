// Exercício 2

   const numeroUm = Number(process.argv[3])
   const numeroDois = Number(process.argv[4])
   const operacao = process.argv[2]

switch(operacao){
	case "add":
		console.log (numeroUm + numeroDois)
		break;
    case "sub":
        console.log (numeroUm - numeroDois)
        break;
    case "mult":
        console.log (numeroUm * numeroDois)
        break;
    case "div":
        console.log (numeroUm / numeroDois)
        break;
    default:
        console.log("Nome Errado da operação, tente novamente")           
}
