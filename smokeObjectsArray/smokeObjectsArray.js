

var circles = [];

function setup() {
  createCanvas(600,600);
  for(var i = 0; i <3000; i++){
    
    circles.push(new Circle(random(width),random(height),random(10,60)));
  }
}

function draw() {
  background(50, 89, 100);
  for (var i = 0; i < circles.length; i++){
  
    circles[i].move();
    circles[i].show();

  }
}

function buttonPressed(){
  circles.push(new Circle());
}

class Circle{
    
  constructor(x,y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.xDir = random(-0.3,0.3);
    this.yDir = random(-0.3,0.3);
    this.speed = 7;
  }
  
  move(){
    this.x = this.x + this.speed * this.xDir;
    this.y = this.y + this.speed * this.yDir;
    if(this.x > width || this.x <width - width){
      this.xDir *= -1;
    }
    if(this.y > height || this.y <height - height){
      this.yDir *= -1;
    }
  }
  
  show(){
    noStroke();
    fill(255,255,255,4);
    ellipse(this.x, this.y, this.r);
  }
  
}