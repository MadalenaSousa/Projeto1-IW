let r, y, b;
let nTriRed, nTriYellow, nTriBlue, nTriAll;
let rand;

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

    rand = 0;
}

function draw() {
    background(255);
    canvas.position(0,window.scrollY);

    if (rand === 0) {
        triangulosEncolhem();
    } else if (rand === 1) {
        esticar();
    }

}

function esticar() {
    noFill();
    strokeWeight(10);

    if ((mouseX > 50 && mouseX < 450) && (mouseY > 550 && mouseY < 550 + 180)) {
        if (r < 350) {
            r = r + 5;
        }
    } else {
        if (r > 50) {
            r = r - 5;
        }
    }

    if ((mouseX > 450 && mouseX < 750) && (mouseY > 450 && mouseY < 450 + 150)) {
        if (b < 900) {
            b = b + 5;
        }
    } else {
        if (b > 200) {
            b = b - 5;
        }
    }

    if ((mouseX > 350 && mouseX < 700) && (mouseY > 800 && mouseY < 800 + 150)) {
        if (y > 200) {
            y = y - 5;
        }
    } else {
        if (y < 700) {
            y = y + 5;
        }
    }

    if ((mouseX > 50 && mouseX < 600) && (mouseY > 50 && mouseY < 350)) {
        if (r < 350 && b < 900 && y < 200) {
            r = r + 5;
            b = b + 5;
            b = b + 5;
        }
    } else {
        if (r > 50 && b > 200 && y < 200) {
            r = r - 5;
            b = b - 5;
            b = b - 5;
        }
    }

    stroke(255, 0, 0);
    triangle(0, 0, 0, 700, r, 350);

    stroke(255, 255, 0);
    triangle(windowWidth/4, windowHeight, windowWidth/2, y, (windowWidth/4)*3, windowHeight);

    stroke(0, 0, 255);
    triangle(windowWidth/2, 0, windowWidth, 0, windowWidth, b);
}

function triangulosEncolhem() {
    noFill();
    strokeWeight(8);

    if ((mouseX > 50 && mouseX < 450) && (mouseY > 550 && mouseY < 550 + 180)) {
        if (nTriRed < 5) {
            nTriRed++;
        }
    } else {
        if (nTriRed > 0) {
            nTriRed--;
        }
    }

    if ((mouseX > 450 && mouseX < 750) && (mouseY > 450 && mouseY < 450 + 150)) {
        if (nTriBlue < 5) {
            nTriBlue++;
        }
    } else {
        if (nTriBlue > 0) {
            nTriBlue--;
        }
    }

    if ((mouseX > 350 && mouseX < 700) && (mouseY > 800 && mouseY < 800 + 150)) {
        if (nTriYellow < 5) {
            nTriYellow++;
        }
    } else {
        if (nTriYellow > 0) {
            nTriYellow--;
        }
    }

    if ((mouseX > 50 && mouseX < 600) && (mouseY > 50 && mouseY < 350)) {
        if (nTriAll < 5) {
            nTriAll++;
        }
    } else {
        if (nTriAll > 0) {
            nTriAll--;
        }
    }

    for (let i=0; i<nTriRed; i++) {
        stroke(255, 0, 0);
        triangle((i*30), ((i*2+1)*30), (i*30), 700 - ((i*2+1)*30), 300 - (i*30), 350);
    }

    for (let i=0; i<nTriYellow; i++) {
        stroke(255, 255, 0);
        triangle(50 + ((i*2+1)*30), 1000 - (i*30), 400, 200 + ((i*3+1)*30), 700 - ((i*2+1)*30), 1000 - (i*30));
    }

    for (let i=0; i<nTriBlue; i++) {
        stroke(0, 0, 255);
        triangle(400 + (i*60), (i*40), 800 - (i*30), (i*40), 800 - (i*25), 900 - ((i*4+1)*30));
    }

    for (let i=0; i<nTriAll; i++) {
        stroke(255, 0, 0);
        triangle((i*30), ((i*2+1)*30), (i*30), 700 - ((i*2+1)*30), 300 - (i*30), 350);
        stroke(255, 255, 0);
        triangle(50 + ((i*2+1)*30), 1000 - (i*30), 400, 200 + ((i*3+1)*30), 700 - ((i*2+1)*30), 1000 - (i*30));
        stroke(0, 0, 255);
        triangle(400 + (i*60), (i*40), 800 - (i*30), (i*40), 800 - (i*25), 900 - ((i*4+1)*30));
    }
}