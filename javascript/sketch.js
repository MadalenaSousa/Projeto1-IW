let r, y, b;
let nTriAll, nTriInc;
let rand;
let over;
let nav;
let mobile = window.matchMedia("(max-width: 600px)");
let tablet = window.matchMedia("(min-width: 600px) and (max-width: 1024px)");
let coresTri;
let lastTime;
let cores = ["red", "blue", "yellow"];

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-5');

    nav = document.querySelectorAll("nav a");

    r = 50;
    y = 700;
    b = 200;

    nTriAll = 1;
    nTriInc = 1;

    rand = randomInt(0,3);

    for(let i=0; i<nav.length; i++) {
        nav[i].addEventListener("mouseleave", function () {
            reverseAnimation();
            nav[i].style.color = "black"
        });
        nav[i].addEventListener("mouseover", function () {
            normalAnimation();
            nav[i].style.color = cores[randomInt(0,3)];
        });
    }

    randomTriCores();

    lastTime = -1000;
}

function draw() {
    canvas.position(0,window.scrollY);

    background(255);

    if(rand === 0) {
        triangulosEncolhem();
    } else if(rand === 1){
        esticar();
    } else if(rand === 2){
        mudarCor();
    }
}

function esticar() {
    //console.log("entrou Esticar");

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

        if(over) {
            if (r < 350) {
                r = r + 5;
            }

            if (b < 900) {
                b = b + 5;
            }

            if (y > 200) {
                y = y - 5;
            }
        } else {
            if (r > 50) {
                r = r - 5;
            }

            if (b > 200) {
                b = b - 5;
            }

            if (y < 700) {
                y = y + 5;
            }
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
    //console.log("entrou triEncolhem");

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

        if(wait(100)) {
            if(over) {
                if (nTriAll < 4) {
                    nTriInc = 1;
                } else {
                    nTriInc = 0;
                }
            } else {
                if (nTriAll > 1) {
                    nTriInc = -1;
                } else {
                    nTriInc = 0;
                }
            }

            nTriAll += nTriInc;

            lastTime = Date.now();
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

function mudarCor() {
    //console.log("entrou mudarCor");

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

        if(over && wait(250)) {
            randomTriCores();
            lastTime = Date.now();
        }

        if (coresTri[0] === 0) {
            stroke(255, 0, 0);
        } else if (coresTri[0] === 1) {
            stroke(0, 0, 255);
        } else {
            stroke(255, 255, 0);
        }
        triangle(0, 0, 0, 700, 500, 350);

        if (coresTri[1] === 0) {
            stroke(255, 0, 0);
        } else if (coresTri[1] === 1) {
            stroke(0, 0, 255);
        } else {
            stroke(255, 255, 0);
        }
        triangle(width / 4, height, width / 2, 300, (width / 4) * 3, height);

        if (coresTri[2] === 0) {
            stroke(255, 0, 0);
        } else if (coresTri[2] === 1) {
            stroke(0, 0, 255);
        } else {
            stroke(255, 255, 0);
        }
        triangle(width / 2, 0, width, 0, width, 500);
    }
}

function normalAnimation() {
    over = true;

}

function reverseAnimation(){
    over = false;
}

function wait(ms) {
    return Date.now() - lastTime > ms;
}

function randomTriCores() {
    coresTri = [-1, -1, -1];

    for (let i = 0; i < 3; i++) {
        coresTri[i] = randomInt(0, 3);
        for (let j = 0; j < 3; j++) {
            if (i !== j && coresTri[i] === coresTri[j]) {
                i = i - 1;
                break;
            }
        }
    }
}

