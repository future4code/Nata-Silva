
// Parte 1

let nomeUser
let idadeUser
console.log (typeof nomeUser)
console.log (typeof idadeUser)
/*Foi impresso pra declarar que tipo de escrita que é*/
nomeUser = prompt ("Digite Seu Nome")
idadeUser = prompt ("Digite Sua Idade")
console.log (typeof nomeUser)
console.log (typeof idadeUser)
/*foi definido o valor prompt para as linhas 6 e 7 */
console.log ("Olá", nomeUser, "você tem", idadeUser, "anos.")

// Parte 2 

let pergunta1 = prompt ("Você está bem?")
let pergunta2 = prompt ("Você bebeu água hoje?")
let pergunta3 = prompt ("Gosta de branco?")
console.log ("Você está bem?",          pergunta1)
console.log ("Você bebeu água hoje?",   pergunta2)
console.log ("Gosta de branco?",        pergunta3)

// Parte 3 

let a = 10
let b = 25
let c = 0

c = a
a = b
b = c

console.log (a, b)
