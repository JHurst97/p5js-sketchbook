<head>
  
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
.w3-bar-block .w3-bar-item {padding:20px}
</style>
  </head>



<body>
  <!-- Sidebar (hidden by default) -->
<nav class="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style="display:none;z-index:2;width:40%;min-width:300px" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()"
  class="w3-bar-item w3-button">Close Menu</a>
  <a href="#food" onclick="w3_close()" class="w3-bar-item w3-button">Food</a>
  <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">About</a>
</nav>
<!-- Top menu -->
<div class="w3-top">
  <div class="w3-white w3-xlarge" style="max-width:1200px;margin:auto">
    <div class="w3-button w3-padding-16 w3-left" onclick="w3_open()">☰</div>
    <div class="w3-right w3-padding-16">p5.js</div>
    <div class="w3-center w3-padding-16">Portfolio</div>
  </div>
</div>

<!-- main content -->
<h4> By Joel Hurst.</h4>
<p>All of my sketches are written in Processing then <strong>pain</strong>stakingly(2d arrays) adapted into p5.js! :) (almost all sketches are animated but obvs not on these images).</p>

<div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:100px">
  <div class="w3-row-padding w3-padding-16 w3-center" id="food">
    <div class="w3-quarter">
      <img src="images/angleIMG.png" alt="angle" style="width:100%">
      <h3><a href="https://venomswitch.github.io/sketchbook/angleSketch/">Angle</a></h3>
      <p>I used to draw these in primary school so thought it would be interesting to recreate it in Processing.</p>
    </div>
    <div class="w3-quarter">
      <img src="images/fractalTreeIMG.png" alt="fractal tree img" style="width:100%">
      <h3><a href="https://venomswitch.github.io/sketchbook/fractalTree/">Fractal tree</a></h3>
      <p>Basic fractal tree with 4 branches at equal angles per iteration.</p>
    </div>
    <div class="w3-quarter">
      <img src="images/paraEquaIMG.png" alt="parametric equations img" style="width:100%">
      <h3><a href="https://venomswitch.github.io/sketchbook/parametricP5/">Parametric equations</a></h3>
      <p>Parametric equations made basic here for purpose of reliability. Can be a bit mental with random values/colours.</p>
    </div>
    <div class="w3-quarter">
      <img src="images/swirlingRectIMG.png" alt="swirling rect img" style="width:100%">
      <h3><a href="https://venomswitch.github.io/sketchbook/swirlingRectp5">Swirling rectangles</a></h3>
      <p>Made by mistake, ended up with this cool pattern.</p>
    </div>
  </div>
  
  
</div>

<!-- scripts for the bar -->
<script>
// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>
</body>
