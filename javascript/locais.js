let botoes = document.querySelectorAll(".modal-footer .btn");

for(let i=0; i<botoes.length; i++){
    botoes[i].addEventListener("mouseenter", function () {
        botoes[i].style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    });

    botoes[i].addEventListener("mouseleave", function () {
        botoes[i].style.backgroundColor = "black";
    });
}