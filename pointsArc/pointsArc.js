function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}

var total = 0;
var spacing;

function draw() {
  background(0);
  stroke(255);
  translate(width/5, height/5);
 // total = mouseX;
  spacing = (height*0.7)  / total;
  var x = 0;
  var y = total * spacing;
  for (var i = 0; i < total; i++) {
    //arc
    line(0, y, x, 0);
    
    x += spacing;
    y -= spacing;
  }
  square(0,0, spacing * total, spacing * total);
  total= map(mouseX,0,width,0,width/16);
  print(width);
  noFill();
}