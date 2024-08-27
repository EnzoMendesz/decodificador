function codificarTexto() {
    let textoCodificado = campoEntrada.value.replace(/a|e|i|o|u/g, function(caracter) {
        return substituicoesCodificacao[caracter];
    });
    campoSaida.value = textoCodificado;
}

function decodificarTexto() {
    let textoDecodificado = campoEntrada.value.replace(/ai|enter|imes|ober|ufat/g, function(substituicao) {
        return substituicoesDecodificacao[substituicao];
    });
    campoSaida.value = textoDecodificado;
}

function copiarTexto() {
    navigator.clipboard.writeText(campoSaida.value);
    campoEntrada.select();
}

function limparCampos() {
    campoEntrada.value = "";
    campoSaida.value = "";
}

let campoEntrada = document.getElementById("input");
let campoSaida = document.getElementById("output");
let botaoCodificarTexto = document.getElementById("codificador");
let botaoDecodificarTexto = document.getElementById("decodificador");
let botaoCopiarTexto = document.getElementById("copiar");
let substituicoesCodificacao = {a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"};
let substituicoesDecodificacao = {ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u"};
let mensagemAviso = document.getElementById("aviso");
let botaoLimparCampos = document.getElementById("limpar");

botaoCodificarTexto.onclick = codificarTexto;
botaoDecodificarTexto.onclick = decodificarTexto;
botaoCopiarTexto.onclick = copiarTexto;
botaoLimparCampos.onclick = limparCampos;

campoEntrada.addEventListener('beforeinput', function(event) {
    if(/[^a-z\s.,?!;]/.test(event.data)) {
        event.preventDefault();
        mensagemAviso.style.color = "red";
        mensagemAviso.style.fontWeight = "bold";
        mensagemAviso.scrollIntoView(true);
    } else {
        mensagemAviso.style.color = "rgb(87, 87, 87)";
        mensagemAviso.style.fontWeight = "normal";
    }
});

document.addEventListener("keydown", function(e) {
    if(e.key == "Enter") {
        e.preventDefault();
    }
});
