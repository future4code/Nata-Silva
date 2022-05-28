
const quantidadeAnagramas = (palavra:string):number => {
    let quantidade:number=1
    palavra.split('').forEach((element:string, index:number):void =>{
        quantidade = quantidade * (index+1)
    })

    return quantidade

}

console.log(quantidadeAnagramas('porta')) 