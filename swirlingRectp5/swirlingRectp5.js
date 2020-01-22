function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  background(50);
  smooth();
  stroke(255);
}

var siz = 400;
var theta = 0;
var direction = 10;
var c = 0;

function draw() {
  translate(width/2, height/2);
  fill(20,20);
  rect(-10,-10,width,height);

  if (siz<1) {
    direction = -direction;
  }
  if (siz>400) {
    direction = -direction;
  }

  rotate(theta);
  noFill();
  rect(0, 0, siz, siz);
  siz-=direction;
  theta+=0.1;
}
