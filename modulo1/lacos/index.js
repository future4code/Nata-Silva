//Exercícios de interpretação de código:

//1:
//  0
//  1
//  3
//  6
//  10

//2:
//  A: 
//    19
//  B: 
//    SIM, POREM TAMBEM É NECESSARIO COLOCAR PARAMETROS INICIAIS (I = 0)

//3: IMPRIME: ****


//Exercícios de escrita de código:

// //1:
// let bichinhos = Number(prompt("Quantos bichinos de estimação voce tem?"))
// if (bichinhos <= 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     array = []
//         for (let i = 0; i < bichinhos; i++) {
//         let aa = (prompt(`digite o seu pet ${i+1}`))
//         array.push (aa)
//         }
//      console.log(array);
//     }

// // //2:
// function funcao1 (array) {
//     for (let i = 0; i < array.length; i++)
//     console.log(array)
// }

// // b: 
// function funcao (array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]/10);   
//     }
// }
//
// // c:
// function funcao (array) {
//     let array2 = []
//     for (let i = 0; i < array.length; i++) {
//        if (array[i] % 2 === 0) { 
//         array2.push (array[i])
//        } 
//     }
// console.log(array2);
// }

//d:
function name(array) {
    let array1 = [] 
    for (let i = 0; i < array.length; i++) {
     array1.push (`O elemento do índex ${i} é: ${array[i]}"`)
    }
    console.log (array1)
}

//e:

array = []
let maiorNumero = array[0]
let menorNumero = array[0]

function encontraMaior(a){
   for(let i = 0; i < array.length; i++){
      
        if(a[i] > maiorNumero){
         maiorNumero = a[i]
        }
        if(a[i] < menorNumero){
        menornumero = a[i]
        }
    }
   console.log(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}`)
}
encontraMaior(array)