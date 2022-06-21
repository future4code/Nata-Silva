// A:
// As Entradas da função é o parametro

function obterEstatisticas(numeros: number[]) {
    
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
        )
        
        let soma: number = 0
        
        for (let num of numeros) {
            soma += num
        }
        
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
        
        console.log(estatisticas)
    }
    obterEstatisticas([10, 20])
    
    
//B:
// Apenas number
    


//C
    type amostra = {
        numeros: number[],
        obterEstatisticas: (numeros: number[]) => void
    }

    const amostraDeIdades: amostra = {
    
            numeros: [21, 18, 65, 44, 15, 18],
    
            obterEstatisticas: (numeros) => {}
    }

    console.log(amostraDeIdades)







