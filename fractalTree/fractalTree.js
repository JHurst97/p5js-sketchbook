function setup() {
  createCanvas(800, 650);
}

function draw() {
  background(234);
  translate(width/2, height);

  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  
    translate(0,-len);
  if (len >15) {
    push();
    rotate(0.5);
    branch(len * 0.75);
    pop();
    push();
    rotate(-0.5);
    branch(len * 0.75);
    pop();
    push();
    rotate(0.1);
    branch(len * 0.75);
    pop();
    push();
    rotate(-0.2);
    branch(len * 0.75);
    pop();
  }
}
