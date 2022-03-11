
console.log();
if(confirm("Quer iniciar uma nova rodada?")) {
   
      const carta1usuario  = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
      const carta2usuario  = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
      const cartaUsuario   = carta1usuario.valor + carta2usuario.valor
      console.log (`Usuário - cartas: ${carta1usuario.texto} e ${carta2usuario.texto}  - pontuação: ${cartaUsuario} `)
   
      const carta1pc  = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
      const carta2pc  = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
      const cartapc   = carta1pc.valor + carta2pc.valor
      console.log (`Computador - cartas: ${carta1pc.texto} e ${carta2pc.texto}  - pontuação: ${cartapc}`)
   
         if ((cartapc > cartaUsuario) && (cartapc <= 21) ) {
            console.log ("O computador ganhou!")
         } else if ((cartapc < cartaUsuario) && (cartaUsuario <= 21) ){
            console.log ("O usuário ganhou!")
         } else {
            console.log("Empate!");
         }
   }
else {
	console.log("O jogo acabou");
}

