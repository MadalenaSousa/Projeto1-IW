let infoOrador = document.querySelectorAll(".infoOrador");
let moreInfo = document.querySelectorAll(".moreInfo");

function dropdown(menu) {
    let conteudo = menu;

    return function() {
        conteudo.classList.toggle("show");
    };
}

for(let i=0; i<moreInfo.length; i++) {
    moreInfo[i].addEventListener("click", dropdown(infoOrador[i]));
}