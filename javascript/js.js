let cores = ["red", "blue", "yellow"];
let pag = document.querySelectorAll("nav a");

for(let i=0; i<pag.length; i++){
    pag[i].addEventListener("mouseenter", function () {
        pag[i].style.color = cores[Math.floor(Math.random() * cores.length)];
    });

    pag[i].addEventListener("mouseleave", function () {
        pag[i].style.color = "black";
    });
}