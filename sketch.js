let r, y, b;
let nTriAll;
let rand;
let nav;
let emCima;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    r = 50;
    y = 700;
    b = 200;

    nTriAll = 0;
    nav = document.querySelectorAll("nav a");
    console.log(nav);

    rand = 0;
}

function draw() {
    canvas.position(0,window.scrollY);

    for(let i=0; i<nav.length; i++) {
        nav[i].addEventListener("mouseenter", function () {
            emCima = true;
        });
        nav[i].addEventListener("mouseenter", function () {
            emCima = true;
        });
    }

    if(emCima === true) {
        for(let i=0; i<nav.length; i++) {
            if(rand === 0) {
                nav[i].addEventListener("mouseenter", triangulosEncolhem);
            } else if(rand === 1){
                nav[i].addEventListener("mouseenter", triangulosEncolhem);
            }
        }
    }

    if (rand === 0) {
        for(let i=0; i<nav.length; i++) {
            nav[i].addEventListener("mousemove", triangulosEncolhem);
        }
    } else if (rand === 1) {
        for(let i=0; i<nav.length; i++) {
            nav[i].addEventListener("mousemove", esticar);
        }
    }
}

function esticar() {
    console.log("entrou Esticar");
    background(255);
    noFill();
    strokeWeight(18);

    if (r < 350) {
        r = r + 5;
    }

    if (b < 900) {
        b = b + 5;
    }

    if (y > 200) {
        y = y - 5;
    }


    stroke(255, 0, 0);
    triangle(0, 0, 0, 700, r, 350);

    stroke(255, 255, 0);
    triangle(windowWidth/4, windowHeight, windowWidth/2, y, (windowWidth/4)*3, windowHeight);

    stroke(0, 0, 255);
    triangle(windowWidth/2, 0, windowWidth, 0, windowWidth, b);
}

function triangulosEncolhem() {
    console.log("entrou triEncolhem");
    background(255);
    noFill();
    strokeWeight(8);

    if (nTriAll < 5) {
        nTriAll++;
    }

    if (nTriAll > 0) {
        nTriAll--;
    }

    for (let i=0; i<nTriAll; i++) {
        stroke(255, 0, 0);
        triangle((i*30), ((i*2+1)*30), (i*30), windowHeight - ((i*2+1)*50), (windowWidth/4) - (i*50), 350);
        stroke(255, 255, 0);
        triangle(windowWidth/4 + ((i*2+1)*40), windowHeight - (i*40), windowWidth/2, 200 + ((i*3+1)*30), ((windowWidth/4)*3) - ((i*2+1)*40), windowHeight - (i*40));
        stroke(0, 0, 255);
        triangle(windowWidth/2 + (i*120), (i*40), windowWidth - (i*45), (i*40), windowWidth - (i*40), 900 - ((i*4+1)*30));
    }
}

