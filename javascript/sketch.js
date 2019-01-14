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
    canvas.style('z-index', '-5');

    nav = document.querySelectorAll("nav a");

    r = 50;
    y = 700;
    b = 200;

    nTriAll = 0;

    rand = 3;
}

function draw() {
    canvas.position(0,window.scrollY);

    for(let i=0; i<nav.length; i++) {
        if(rand === 0) {
            nav[i].addEventListener("mousemove", triangulosEncolhem);
        } else if(rand === 1){
            nav[i].addEventListener("mousemove", esticar);
        } else if(rand === 3){
            nav[i].addEventListener("mouseenter", rodar);
        }
    }
}

function esticar() {
    console.log("entrou Esticar");

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

    stroke(0, 0, 255);
    triangle(width/4, height, width/2, y, (width/4)*3, height);

    stroke(255, 255, 0);
    triangle(width/2, 0, width, 0, width, b);
}

function triangulosEncolhem() {
    console.log("entrou triEncolhem");

    noFill();
    strokeWeight(12);

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

function rodar() {
    console.log("entrou rodar");

    noFill();
    strokeWeight(18);

    stroke(255, 0, 0);
    triangle(0, 0, 0, 700, 500, 350);

    stroke(0, 0, 255);
    triangle(width/4, height, width/2, 300, (width/4)*3, height);

    stroke(255, 255, 0);
    triangle(width/2, 0, width, 0, width, 500);
}

