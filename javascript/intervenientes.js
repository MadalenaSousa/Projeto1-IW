let botoes = document.querySelectorAll(".btn");
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

for(let i=0; i<botoes.length; i++){
    botoes[i].addEventListener("mouseenter", function () {
        botoes[i].style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    });

    botoes[i].addEventListener("mouseleave", function () {
        botoes[i].style.backgroundColor = "black";
    });
}