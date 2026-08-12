/* =========================================
   ELEMENTOS
========================================= */

const aumentarTexto =
    document.getElementById("aumentarTexto");

const diminuirTexto =
    document.getElementById("diminuirTexto");

const altoContraste =
    document.getElementById("altoContraste");

const contrasteInvertido =
    document.getElementById("contrasteInvertido");

const lerTexto =
    document.getElementById("lerTexto");

const pararLeitura =
    document.getElementById("pararLeitura");

const resetar =
    document.getElementById("resetar");


/* =========================================
   TAMANHO DO TEXTO
========================================= */

let tamanhoTexto = 18;

const tamanhoMinimo = 14;
const tamanhoMaximo = 30;
const incremento = 2;


function atualizarTexto() {

    document.documentElement.style.setProperty(
        "--tamanho-base",
        `${tamanhoTexto}px`
    );
}


aumentarTexto.addEventListener("click", () => {

    if (tamanhoTexto < tamanhoMaximo) {

        tamanhoTexto += incremento;

        atualizarTexto();
    }
});


diminuirTexto.addEventListener("click", () => {

    if (tamanhoTexto > tamanhoMinimo) {

        tamanhoTexto -= incremento;

        atualizarTexto();
    }
});


/* =========================================
   ALTO CONTRASTE
========================================= */

altoContraste.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste");

    // Desativa o contraste invertido
    document.body.classList.remove("contraste-invertido");
});


/* =========================================
   CONTRASTE INVERTIDO
========================================= */

contrasteInvertido.addEventListener("click", () => {

    document.body.classList.toggle("contraste-invertido");

    // Desativa o alto contraste
    document.body.classList.remove("alto-contraste");
});


/* =========================================
   LEITURA EM VOZ ALTA
========================================= */

lerTexto.addEventListener("click", () => {

    // Verifica se o navegador possui suporte
    if (!("speechSynthesis" in window)) {

        alert(
            "Seu navegador não possui suporte à leitura em voz alta."
        );

        return;
    }


    // Para uma leitura anterior
    window.speechSynthesis.cancel();


    const texto =
        document.querySelector(".texto").innerText;


    const leitura =
        new SpeechSynthesisUtterance(texto);


    // Idioma português do Brasil
    leitura.lang = "pt-BR";


    // Velocidade da fala
    leitura.rate = 0.9;


    // Tom da voz
    leitura.pitch = 1;


    window.speechSynthesis.speak(leitura);
});


/* =========================================
   PARAR LEITURA
========================================= */

pararLeitura.addEventListener("click", () => {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();
    }
});


/* =========================================
   RESTAURAR CONFIGURAÇÕES
========================================= */

resetar.addEventListener("click", () => {

    tamanhoTexto = 18;

    atualizarTexto();

    document.body.classList.remove(
        "alto-contraste",
        "contraste-invertido"
    );


    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();
    }
});