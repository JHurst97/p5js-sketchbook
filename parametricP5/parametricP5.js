function setup() {
  createCanvas(500, 500);
  r1 = 100;
  r2 = 200;
}

var x1;
var y1;
var x2;
var y2; 
var r1; 
var r2;
var t =0;

function draw() {
  fill(20,5);
  rect(-10,-10,width,height);
  translate(width/2,height/2);
  stroke(255);

  x1 = getInnerX();
  y1 = getInnerY();
  x2 = getOuterX();
  y2 = getOuterY();
  
  line(x1,y1,x2,y2);
  t+=0.05;
}

function getInnerX() {
  x_ = r1*cos(-t); 
  return x_;
}

function getInnerY() {
  y_ = r1*sin(-t); 
  return y_;
}

function getOuterX() {
  x_ = r2*cos(t); 
  return x_;
}

function getOuterY() {
  y_ = r2*sin(t); 
  return y_;
}
