function setup() {
  createCanvas(1300, 900);
  r1 = random(0, 100);
  r2 = random(0, 100);
  bSlider = createSlider(0, 10, 1, 0.2);
  bSlider.position(width/4, height*0.5);
  aSlider = createSlider(0, 10, 1, 0.2);
  aSlider.position(width/4, height*0.6);
  textSize(30);
}
var aSlider, bSlider;
var r1;
var r2;
var speed = 0;
var points = [];
var xVal, yVal;

function draw() {
  background(51);
  translate(width/2, height/3);

  var r = width/12;


  var a = aSlider.value();
  var b = bSlider.value();

  if (aSlider.value()!=xVal) {
    points = [];
    print('a: ' + bSlider.value() + '\nb: ' + aSlider.value());
  }
  if (bSlider.value()!=yVal) {
    points = [];
    print('a: ' + bSlider.value() + '\nb: ' + aSlider.value());
  }
  xVal = a;
  yVal = b;


  var x = r * cos(a*speed);
  var y = r * sin(b*speed);

  var xX = r * cos(a*speed);
  var xY = r * sin(a*speed);
  var yX = r * cos(b*speed);
  var yY = r * sin(b*speed);

  strokeWeight(0.5);
  circle(-r*2.5, 0, r);
  circle(0, r*2.5, r);
  ellipse(xX, xY + r * 2.5, 30);
  ellipse(yX - r *2.5, yY, 30);

  rectMode(CENTER);
  line(yX - r *2.5, y, r*2, y);
  line(x, -r*2, x, xY+r*2.5);

  fill(255);
  text(aSlider.value(), 0, r*2.5); // Text wraps within text box
  text(bSlider.value(), -r*2.5, 0); // Text wraps within text box

  noFill();
  strokeWeight(5);
  ellipse(x, y, 30);

  points.push(createVector(x, y));
  noFill();
  stroke(255);
  beginShape();
  for (var i = 0; i < points.length; i++) {
    vertex(points[i].x, points[i].y);
  }
  endShape();

  speed+=0.03;
}