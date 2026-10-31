
const perguntas = [
"Você conhecia a vítima?",
"Você esteve no local do crime?",
"Você esteve com a vítima no dia do ocorrido?",
"Você viu alguém com a vítima no dia do ocorrido?",
"Você discutiu com a vítima recentemente?",
"Você escondeu alguma informação da polícia?",
"Você conhece alguém envolvido no caso?",
"Você mentiu durante o seu depoimento?",
"Você ajudou alguém a esconder provas?",
"Você sabe quem cometeu o crime?"
];

let indice = 0;
let quantidadeSim = 0;

function iniciarTeste() {
    indice = 0;
    quantidadeSim = 0;

    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("resultado").classList.add("escondido");
    document.getElementById("perguntas").classList.remove("escondido");

    mostrarPergunta();
}

function mostrarPergunta() {
    document.getElementById("progresso").textContent =
        `Pergunta ${indice + 1} de ${perguntas.length}`;

    document.getElementById("numeroPergunta").textContent =
        `PERGUNTA ${String(indice + 1).padStart(2, "0")}`;

    document.getElementById("textoPergunta").textContent =
        perguntas[indice];

    document.getElementById("progressoBarra").style.width =
        ((indice + 1) / perguntas.length * 100) + "%";
}

function responder(resposta) {
    if (resposta === "sim") {
        quantidadeSim++;
    }

    indice++;

    if (indice < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("perguntas").classList.add("escondido");
    document.getElementById("resultado").classList.remove("escondido");

    let classificacao = "";
    let mensagem = "";

    switch (true) {
        case quantidadeSim < 5:
            classificacao = "Inocente";
            mensagem = "Poucas respostas positivas foram registradas.";
            break;

        case quantidadeSim === 5:
            classificacao = "Suspeito";
            mensagem = "O resultado indica um nível intermediário.";
            break;

        case quantidadeSim >= 6 && quantidadeSim <= 8:
            classificacao = "Cúmplice";
            mensagem = "Muitas respostas positivas foram registradas.";
            break;

        case quantidadeSim >= 9 && quantidadeSim <= 10:
            classificacao = "Culpado";
            mensagem = "Quase todas as respostas foram positivas.";
            break;
    }

    document.getElementById("quantidadeSim").textContent =
        quantidadeSim;

    document.getElementById("classificacao").textContent =
        classificacao;

    document.getElementById("mensagem").textContent =
        mensagem;
}

function reiniciarTeste() {
    iniciarTeste();
}
