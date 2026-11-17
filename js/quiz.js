var perguntas = {

    quimica: [

        ["Qual é a fórmula da água?", ["CO2", "H2O", "O2", "NaCl"], 1],

        ["Qual é o símbolo do ouro?", ["Ag", "Fe", "Au", "O"], 2],

        ["Qual é o pH de uma solução neutra a 25°C?", ["0", "5", "7", "14"], 2],

        ["Qual gás é absorvido pelas plantas na fotossíntese?", ["Oxigênio", "Nitrogênio", "Gás carbônico", "Hidrogênio"], 2],

        ["Qual partícula tem carga negativa?", ["Próton", "Elétron", "Nêutron", "Núcleo"], 1],

        ["Qual é o principal componente do gás natural?", ["Metano", "Oxigênio", "Hélio", "Cloro"], 0],

        ["Como se chama a passagem do líquido para o gasoso?", ["Fusão", "Solidificação", "Vaporização", "Condensação"], 2],

        ["Qual destes elementos é um metal?", ["Oxigênio", "Ferro", "Carbono", "Hélio"], 1],

        ["Qual é o símbolo químico do sódio?", ["S", "So", "Na", "N"], 2],

        ["Água e sal dissolvido formam qual tipo de mistura?", ["Suspensão", "Solução", "Emulsão", "Heterogênea"], 1]

    ],

    geografia: [

        ["Qual é o maior continente?", ["África", "Europa", "Ásia", "Oceania"], 2],

        ["Qual é a capital do Brasil?", ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"], 2],

        ["Qual é o maior oceano?", ["Atlântico", "Índico", "Ártico", "Pacífico"], 3],

        ["Qual linha divide a Terra em Norte e Sul?", ["Trópico de Câncer", "Equador", "Greenwich", "Capricórnio"], 1],

        ["Qual bioma predomina no Brasil central?", ["Pampa", "Caatinga", "Cerrado", "Pantanal"], 2],

        ["Qual movimento da Terra causa os dias e as noites?", ["Translação", "Rotação", "Precessão", "Revolução"], 1],

        ["Qual é o maior país em território?", ["Canadá", "China", "EUA", "Rússia"], 3],

        ["O que é urbanização?", ["Crescimento rural", "Crescimento das cidades", "Diminuição das cidades", "Desmatamento"], 1],

        ["Qual é o clima predominante na Amazônia?", ["Polar", "Desértico", "Equatorial", "Mediterrâneo"], 2],

        ["Para que serve a escala de um mapa?", ["Mostrar altitude", "Comparar distância do mapa com a real", "Mostrar temperatura", "Mostrar pontos cardeais"], 1]

    ]

};

var materia = "";
var pontos = 0;

function iniciarQuiz(escolha) {

    materia = escolha;

    document.getElementById("inicio").classList.add("escondido");

   document.getElementById("areaQuiz").classList.remove("escondido");

    document.getElementById("resultado").innerHTML = "";

    document.getElementById("voltar").classList.add("escondido");

    if (materia == "quimica") {
        document.getElementById("titulo").innerHTML = "Quiz de Química";
    } else {
        document.getElementById("titulo").innerHTML = "Quiz de Geografia";
    }

    mostrarPerguntas();

}

function mostrarPerguntas() {

    var texto = "";

    for (var i = 0; i < 10; i++) {

        texto += "<div class='pergunta'>";

        texto += "<h3>" + (i + 1) + ". " + perguntas[materia][i][0] + "</h3>";

        for (var j = 0; j < 4; j++) {

            texto += "<label class='opcao'>";

            texto += "<input type='radio' name='p" + i + "' value='" + j + "'>";

            texto += perguntas[materia][i][1][j];

            texto += "</label>";

        }

        texto += "</div>";

    }

    document.getElementById("perguntas").innerHTML = texto;

}

function corrigir() {

    pontos = 0;

    for (var i = 0; i < 10; i++) {

        var resposta = document.querySelector('input[name="p' + i + '"]:checked');

        if (resposta == null) {
            alert("Responda todas as perguntas!");
            return;
        }

        if (resposta.value == perguntas[materia][i][2]) {
            pontos++;
        }

    }

    document.getElementById("resultado").innerHTML =
        "Você acertou " + pontos + " de 10 perguntas!";

    document.getElementById("voltar").classList.remove("escondido");

}

function voltar() {

   document.getElementById("areaQuiz").classList.add("escondido");

    document.getElementById("inicio").classList.remove("escondido");

}
