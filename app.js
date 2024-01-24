let listaDeNumeroSorteados = [];

let numeroSecreto = gerarNumeroAlertorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

exibirTextoNaTela("h1", "Jogo Do numero secreto");
exibirTextoNaTela("p", "Escolha um numero de 1 a 10");

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? " tentativas" : "tentativa";
    let menssagem = `Voce Descobriu o numero Secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", menssagem);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O numero secreto e menor");
    } else {
      exibirTextoNaTela("p", "O Numero secreto e maior");
    }
    tentativas++;
    limparCampo();
  }
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAlertorio();
  limparCampo();
  tentativas = 1;
  exibirMenssagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirMenssagemInicial() {
  exibirTextoNaTela("h1", "Jogo Do numero secreto");
  exibirTextoNaTela("p", "Escolha um numero de 1 a 10");
}

exibirMenssagemInicial();

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function gerarNumeroAlertorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAlertorio();
  } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
  }
}
