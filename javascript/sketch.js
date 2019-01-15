let r, y, b;
let nTriAll;
let rand;
let nav;
let mobile = window.matchMedia("(max-width: 600px)");
let tablet = window.matchMedia("(min-width: 600px) and (max-width: 1024px)");

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

    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    rand = random(0,3);
}

function draw() {
    canvas.position(0,window.scrollY);

    if(mobile.matches || tablet.matches) {
        if(rand === 0) {
            triangulosEncolhem();
        } else if(rand === 1){
            esticar();
        } else if(rand === 2){
            rodar();
        }
    } else {
        for(let i=0; i<nav.length; i++) {
            if(rand === 0) {
                nav[i].addEventListener("mousemove", triangulosEncolhem);
            } else if(rand === 1){
                nav[i].addEventListener("mousemove", esticar);
            } else if(rand === 2){
                nav[i].addEventListener("mouseenter", rodar);
            }
        }
    }
}

function esticar() {
    console.log("entrou Esticar");
    background(255);
    noFill();

    if(mobile.matches || tablet.matches){
        strokeWeight(12);

        if (r < width/2) {
            r = r + 5;
        }

        if (b < (height/4)*3) {
            b = b + 5;
        }

        if (y > 350) {
            y = y - 5;
        }

        stroke(255, 0, 0);
        triangle(0, 0, 0, (windowHeight/4)*3, r, windowHeight/3);

        stroke(255, 255, 0);
        triangle(width/4, height, width/2, y, (width/4)*3, height);

        stroke(0, 0, 255);
        triangle(width/2, 0, width, 0, width, b);
    } else {
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
}

function triangulosEncolhem() {
    console.log("entrou triEncolhem");

    noFill();
    if(mobile.matches || tablet.matches) {
        strokeWeight(12);

        for (let i=0; i<3; i++) {
            stroke(255, 0, 0);
            triangle(i*30, i*80, i*30, (windowHeight/4)*3 - ((i*2+1)*50), width/2  - (i*50), windowHeight/3);

            stroke(255, 255, 0);
            //Canto fundo esquerdo, cimo, canto fundo direito
            triangle(width/4 + (i*40), windowHeight - (i*40), windowWidth/2, windowHeight/2 + (i*80), ((windowWidth/4)*3) - (i*40), windowHeight - (i*40));

            stroke(0, 0, 255);
            //Canto cimo esquerdo, canto cimo direito, fundo
            triangle(width/2 + (i*40), (i*40), width - (i*40), (i*40), width - (i*30), ((windowHeight/4)*3) - (i*150));
        }

    } else {
        strokeWeight(18);

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
}

function rodar() {
    console.log("entrou rodar");

    noFill();
    if(mobile.matches || tablet.matches){
        strokeWeight(12);

        stroke(255, 0, 0);
        triangle(0, 0, 0, (windowHeight/4)*3, width/2, windowHeight/3);

        stroke(255, 255, 0);
        triangle(width/4, height, width/2, 350, (width/4)*3, height);

        stroke(0, 0, 255);
        triangle(width/2, 0, width, 0, width, 500);
    } else {
        strokeWeight(18);

        stroke(255, 0, 0);
        triangle(0, 0, 0, 700, 500, 350);

        stroke(0, 0, 255);
        triangle(width/4, height, width/2, 300, (width/4)*3, height);

        stroke(255, 255, 0);
        triangle(width/2, 0, width, 0, width, 500);
    }
}

