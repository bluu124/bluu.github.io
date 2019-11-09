//mi primer intento de space invader usando emojis y p5.js por Juan Pablo Polanco
//en base a:  https://www.openprocessing.org/sketch/780757
let aliens = [];
let aliensNum = 60;

function setup() {
  //crea un lienzo para dibujar el cual se ajustara con windowResized
  var canvas = createCanvas(windowWidth, windowHeight);
  // mueve el canvas dentro de <div id="sketch-holder">.
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  //canvas.parent('sketch-holder');

  for (let i = 0; i < aliensNum; i++) {
    aliens.push(new Alien());
  }
  textAlign(CENTER, CENTER);
  noCursor();
}

function draw() {
  background(255);

  for (let i = 0; i < aliensNum; i++) {
    aliens[i].display();
    aliens[i].move();
  }

  textSize(90);
  text("🔥", mouseX, mouseY);
}

function Alien() {
  this.x = random(width);
  this.s = random(30, 100);
  this.xs = -1 * random(2, 15);
  this.y = random(height);
  this.emoji = "👾";

  this.display = function () {
    stroke(0);
    if (dist(mouseX, mouseY, this.x, this.y) < 100) {
      this.emoji = "🕊";
    }
    textSize(this.s);
    text(this.emoji, this.x, this.y);
  }

  this.move = function () {
    this.x += this.xs;
    if (this.x < -this.s * 1.1) {
      this.x = width + this.s * 1.1;
      this.emoji = "👾";
    }
  }
}
//ajunta el tamaño del lienzo
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
