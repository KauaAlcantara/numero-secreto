let numerosSorteados = [];
 let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 1;

// funcao para EXIBIR O TEXTO
function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.5});
}

exibirTexto("h1", "Jogo do numero secreto");
exibirTexto("p", "Apenas numero de 1 a 10");

// funcao para verificar o chute
function verificarChute() {
  let chute = document.querySelector(".container__input").value;
  // verficar se o valor de chute ja esta na lista
  if (numerosSorteados.includes(chute)) {
    exibirTexto("h1", "Voce ja tentou esse numero, tente outro");
    gerarNumeroAleatorio()
  } else {
    numerosSorteados.push(chute);
  }
  // caso chute for igual o numero secreto
  if (chute == numeroSecreto) {
    let textoTente = tentativas > 1 ? "tentativas" : "tentativa";
    exibirTexto("h1",`Acertou o numero secreto ${numeroSecreto} com ${tentativas} ${textoTente}`);
    exibirTexto("p", "Voce acertou!");
    // variavel newGame para habilitar o botao de NOVO JOGO
    let chuteDisabled = (document.querySelector("#start").disabled = true);
    let newGame = (document.querySelector("#reiniciar").disabled = false);
  }

  // verificar caso chute for diferente o numero secreto
  if (chute > 10 || chute < 1) {
    exibirTexto("p", "Apenas numeros de 1 a 10");
  } else if (chute > numeroSecreto) {
    exibirTexto("p", "O numero secreto e menor");
  } else if (chute < numeroSecreto) {
    exibirTexto("p", "O numero secreto e maior");
  }
  // tentativa = tentativa + 1
  tentativas++;
  limparCampo();
}
// funcao para LIMPAR O CAMPO
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

// funcao para REINICIAR O JOGO
function reiniciar() {
  location.reload();
}

function gerarNumeroAleatorio() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  console.log(numeroSecreto)
  return numeroSecreto
}
