function setup() {
   createCanvas(400, 400);
}

function draw() {
  background(0);
  ellipse(200, 200, 50, 50);
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
