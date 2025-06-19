let emJogo = true;

iniciarJogo();

function iniciarJogo() {
  while (emJogo) {
    var jogador = parseInt(
      prompt("Faça sua escolha:\n0 - Pedra\n1 - Papel\n2 - Tesoura")
    );

    var maquina = Math.floor(Math.random() * 3);
    // var maquina = 1;

    if (jogador === maquina) {
      alert("Deu empate! Vamos tentar de novo...");
    } else {
      emJogo = false;
    }
  }

  resultadoFinal(jogador, maquina);
}

function resultadoFinal(jogador, maquina) {
  const opcoes = ["Pedra", "Papel", "Tesoura"];

  if (
    (jogador === 0 && maquina === 2) ||
    (jogador === 1 && maquina === 0) ||
    (jogador === 2 && maquina === 1)
  ) {
    alert(
      `Você venceu! O computador escolheu ${opcoes[maquina]} (${maquina}).`
    );
  } else {
    alert(
      `Você perdeu! O computador escolheu ${opcoes[maquina]} (${maquina}).`
    );
  }
}
