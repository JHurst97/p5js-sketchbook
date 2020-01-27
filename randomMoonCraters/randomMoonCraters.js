function setup() {
  createCanvas(900,900);
  noLoop();
  noFill();
  smooth();
}



function draw() {
  background(0);
  translate(width/2,height/2);
  for(var i = 0; i < 1500; i++){
    var r = 350;
    stroke(random(200,250));
    
    var theta = random(0,10);
    var theta2 = random(0,10);
    var x = r * cos(theta);
    var y = r * sin(theta);
    var x2 = r * cos(theta2);
    var y2 = r * sin(theta2);
    
    line(x2,y2,x,y);
    ellipse(0,0,700);
  }
  
}