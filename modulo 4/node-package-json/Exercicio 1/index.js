// Exercício 1

// A: Pode ser passado pela API ou pelo "process.argv"



const nome = process.argv[2]
const idade = Number(process.argv[3])

// B
console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// C
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)
