// Exercícios de interpretação de código:

//1: vai imprimir o item que é a variavel, o index que é o i da for ( a quantidade de voltas)
// e a array que é a lista completa 
//
//2: vai ser impresso todos os nomes do array 
//
//3: colocar todos que nao possuem chijo na array


// Exercícios de escrita de código:

// //1:
//     //A:

    // const pets = [
    //     { nome: "Lupin", raca: "Salsicha"},
    //     { nome: "Polly", raca: "Lhasa Apso"},
    //     { nome: "Madame", raca: "Poodle"},
    //     { nome: "Quentinho", raca: "Salsicha"},
    //     { nome: "Fluffy", raca: "Poodle"},
    //     { nome: "Caramelo", raca: "Vira-lata"},
    //  ]

    // const pets2 = pets.map((i) => {
    //     return i.nome
//     })
//     console.log (pets2)
//     //B:
//     const pets3 = pets.filter((i) => {
//         a = i.raca.toLocaleLowerCase() === "salsicha"
//         return a
//     })
//     console.log(pets3)

    
        // const pets4 = pets.filter((i) => {
        // let filtragem =  i.raca.toLocaleLowerCase() === "poodle"
        // return filtragem
        // }).map ((i) => { 
        // console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${i.nome}!`);
        // })
   
// //2:
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const nomesProdutos = produtos.map((i) => {
//     return i.nome
//     })
//     console.log (nomesProdutos)


//  const produtosDesconto = produtos.map((i) => {
//     let desconto = {nome: i.nome, preco: i.preco * 0.95} 
//     return desconto
//     })
//     console.log (produtosDesconto)

//  const soBebidas = produtos.filter((a) => {
//     return a.categoria.toLocaleLowerCase() === "bebidas"
//     })
//     console.log(soBebidas)

//  const ype = produtos.filter((a) => {
//     let prodYPE = a.nome.toLocaleLowerCase().includes("ypê")
//     return prodYPE 
//     })
//     console.log(ype)

// let arraynova = ype.map((i) => {
//     return `Compre ${i.nome} por ${i.preco}`
// })
//
