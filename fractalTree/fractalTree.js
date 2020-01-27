function setup() {
  createCanvas(800, 800);
  // create sliders
  aSlider = createSlider(-5, 5, 4.5,0.01); //angle
  aSlider.position(20, 20);
  dSlider = createSlider(0, 255, 50); //depth/length
  dSlider.position(20, 50);
  bSlider = createSlider(0, 5, 2); //branch count
  bSlider.position(20, 80);
}

let aSlider, dSlider, bSlider;

function draw() {
  background(234);
  text('angle', aSlider.x * 2 + aSlider.width, 35);
  text('depth/length', dSlider.x * 2 + dSlider.width, 65);
  text('branch density', bSlider.x * 2 + bSlider.width, 95);
  translate(width/2, height);
  branch(dSlider.value());
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len >15) {
    for (let i = 0; i < bSlider.value(); i++) {
      let angle = map(i, 0, 5, -0.5, aSlider.value());
      push();
      rotate(angle);
      branch(len * 0.75);
      pop();
    }
  }
}