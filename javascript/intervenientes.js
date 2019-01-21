let infoOrador = document.querySelectorAll(".infoOrador");

function dropdown(menu) {
    let conteudo = menu;

    return function() {
        conteudo.classList.toggle("show");
    };
}

for(let i=0; i<botoes.length; i++) {
    botoes[i].addEventListener("click", dropdown(infoOrador[i]));
}