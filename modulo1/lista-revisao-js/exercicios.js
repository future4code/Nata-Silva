// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function aaa(a, b) {
    return a - b
  }
  return array.sort(aaa)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let retornarpar = (elementoarray) => {
    return (elementoarray % 2) === (0)
  }
  return array.filter(retornarpar)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let retornarpar = (elementoarray) => {
    return (elementoarray % 2) === (0)
  }
  let numeroElevado2 = (elementoarray) => {
    return elementoarray * elementoarray
  }

  return array.filter(retornarpar).map(numeroElevado2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior
}


// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {

  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);


  let objeto = {
    maiorNumero: max,
    maiorDivisivelPorMenor: (num1 % num2) === 0 || (num2 % num1) === 0,
    diferenca: max - min
  }
  return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = []
  for (let i = 0; i < n; i++) {
    array[i] = i * 2
  }
  return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoC === ladoA) {
    return "Equilátero"
  } if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles"
  } else {
    return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

  array.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  let array2 = [array[array.length - 2], array[1]]
  return array2
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let alteracao = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return alteracao
}
// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAltorizadas = pessoas.filter((pessoas) => {
    return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60
  })
  return pessoasAltorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAltorizadas = pessoas.filter((pessoas) => {
    return pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade > 60
  })
  return pessoasNaoAltorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (let i = 0; i < contas.length; i++) {
    soma = 0
    for (let j = 0; j < contas[i].compras.length; j++) {
      soma = soma + contas[i].compras[j]
    }
    contas[i].saldoTotal = contas[i].saldoTotal - soma
    contas[i].compras = []
  }
  return contas 
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  function compare(a,b) {
    if (a.nome < b.nome)
       return -1;
    if (a.nome > b.nome)
      return 1;
    return 0;
  }

  return consultas.sort(compare)
};


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}