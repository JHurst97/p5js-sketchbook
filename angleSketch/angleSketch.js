
function setup() {
  createCanvas(canvasWidth,canvasHeight);
}

var canvasWidth = 1000;
var canvasHeight = 600;
var spacing = 150;
  
function draw() {
  background(0);
  translate(canvasWidth/10, canvasHeight - 100);
  
  
  
  if(spacing >= 10){
    spacing -=1;
  }else if(spacing >= 5 && spacing <= 10){
    spacing -=0.01;
  }else{
    spacing=150;
  }
  
  var x = 400;
  var y = 0;
  
  for(var i = 0; i < canvasHeight - 200; i+=spacing){
      noFill();
      stroke(255);
      //ellipse(x, 0, 10);
      //ellipse(0, y, 10);
      line(0, y, x, 0);
      x -= spacing;
      y -= spacing;
  }
}
