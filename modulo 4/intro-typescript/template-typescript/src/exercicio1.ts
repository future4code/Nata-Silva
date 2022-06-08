// exercicio 1

function checaTriangulo(a:Number, b: Number, c: Number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

console.log (checaTriangulo(10, 20, 10))
