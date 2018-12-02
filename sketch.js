let r, y, b;

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
}

function draw() {
    background(255);
    canvas.position(0,window.scrollY);

    esticar();
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
    triangle(50, 1000, 400, y, 700, 1000);

    stroke(0, 0, 255);
    triangle(400, 0, 800, 0, 800, b);
}