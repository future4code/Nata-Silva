// Exercício 1

let minhaString: string = "10"
// A diz que o tipo number nao pode ser atribuido a uma string

let meuNumero: number  = 10
// B diz que o tipo String nao pode ser atribuido a um Number

// C 
// D
type Person = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum corFavorita {
    AZUL= "Azul",
    VERDE= "Verde",
    AMARELO="Amarelo"
}

const listaDePessoa1: Person = {
    nome: "Natã",
    idade: 19,
    corFavorita: corFavorita.AZUL
}

const listaDePessoa2: Person = {
    nome: "Mateus",
    idade: 25,
    corFavorita: corFavorita.VERDE
}

const listaDePessoa3: Person = {
    nome: "Crestani",
    idade: 33,
    corFavorita: corFavorita.AMARELO
}




//

type usuarios = Person[]

const userList:usuarios = []

userList.push(listaDePessoa1)
userList.push(listaDePessoa2)
userList.push(listaDePessoa3)

console.table(userList)


