'''
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let temp = 0 
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido ) {
      temp = temp + 1 
    }
  }
  
  if (temp === 0) {
    return "Número não encontrado"
  }else {
    return `O número ${numeroEscolhido} aparece ${temp}x`
  }
}
'''