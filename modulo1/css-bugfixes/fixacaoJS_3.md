'''function calculaNota(ex, p1, p2) {
  let exercicio = ex * 1
  let peso1     = p1 * 2
  let peso2     = p2 * 3
  let soma = (exercicio + peso1 + peso2) / 6
  
  if (soma >= 9) {
    return "A"
  }else if (soma < 9 && soma >= 7.5) {
    return "B"    
  }else if (soma < 7.5 && soma > 6) {
    return "C"
  }else {
    return "D"
  }
}'''
