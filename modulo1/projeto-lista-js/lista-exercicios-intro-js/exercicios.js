// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  altura = Number  (prompt ("digite a altura do retatangulo"))
  largura = Number (prompt ("digite a largura do retatangulo"))
    resultado = altura * largura 
    console.log (resultado) 
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtural    = Number  (prompt ("digite o ano que estamos"))
  anoNasc      = Number (prompt ("digite o ano que voce nasceu"))
  idadeAtual   =  anoAtural - anoNasc 
  console.log (idadeAtual) 
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    imc   =  peso / [altura * altura] 
    console.log (imc) 
    return imc
}
calculaIMC(0,0)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome  =         prompt ("digite o seu nome")
  idade = Number (prompt ("digite a sua idade"))
  email =         prompt ("digite seu email")

    console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  cor1  = prompt("digite a primeira cor")  
  cor2  = prompt("digite a sua cor")
  cor3  = prompt("digite a terceira cor")
  cores = [cor1, cor2, cor3] 
  console.log (cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  //valordafuncao = string.toUpperCase()
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 quantidade = custo / valorIngresso
 return quantidade
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  tamanho1 = string1.length
  tamanho2 = string2.length
  return tamanho1 === tamanho2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
   return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  comprimento = array.length

  return array[comprimento - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  comprimento = array.length 

  ultimo      = array [comprimento - 1] 
  primeiro    = array [0]

  array [comprimento -1]  = primeiro
  array [0]               = ultimo
    
  return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  funcao1 = string1.toLowerCase()
  funcao2 = string2.toLowerCase()
  return funcao1 === funcao2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}