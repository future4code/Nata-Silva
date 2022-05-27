
function funcao (nome: string, data: string) {
    const  dataArrray = data.split(" ")
    console.log(`"Olá me chamo ${nome}, nasci no dia ${dataArrray[0]} do mês de ${dataArrray[1]} do ano de ${dataArrray[2]}" `)
}
funcao("Natã", "28 Março 2003")