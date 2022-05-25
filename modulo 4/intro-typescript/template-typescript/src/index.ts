// // exercicio 1

// function checaTriangulo(a:Number, b: Number, c: Number) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

// //   console.log (checaTriangulo(10, 20, 10))





// // exercicio 2

// function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): void {
//     // const cor1 =  prompt("Insira sua primeira cor favorita")
//     // const cor2 =  prompt("Insira sua segunda cor favorita")
//     // const cor3 =  prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }
// imprimeTresCoresFavoritas("verde", "rosa", "preto")




// // exercicio 3

// function checaAnoBissexto(ano: number): boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

// console.log (checaAnoBissexto(2021))





// // exercicio 4

// function comparaDoisNumeros(num1: number, num2: number): number {
//     let maiorNumero: number
//     let menorNumero: number
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
// }
// console.log (comparaDoisNumeros(14, 20))
  


