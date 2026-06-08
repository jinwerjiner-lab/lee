let colorStart, colorEnd;

function setup() {
  createCanvas(600, 400);
  
  colorStart = color(255, 100, 100); 
  colorEnd = color(100, 100, 255);   
}

function draw() {
  background(230);
  stroke(0);
  
  strokeWeight(5);
  fill(255);
  let triOffset = sin(frameCount * 0.02) * 20;
  triangle(300, 200, 550 + triOffset, 10 + triOffset, 550, 200);

  let colorAmt = (sin(frameCount * 0.01) + 1) / 2;
  fill(lerpColor(colorStart, colorEnd, colorAmt));
  rectMode(CORNER);
  rect(50, 30, 200, 300);
  
  let greenGlow = map(sin(frameCount * 0.03), -1, 1, 150, 220);
  fill(0, greenGlow, 0);
  rectMode(CORNER);
  let rectWidth = 350 + cos(frameCount * 0.02) * 30;
  rect(200, 300, rectWidth, 70);
  
  fill(100, 150, 255);
  let circleSize = 150 + sin(frameCount * 0.03) * 15;
  ellipse(270, 250, circleSize, circleSize);
  
  colorMode(HSB);
  let hueVal = (frameCount * 0.3) % 360; 
  fill(hueVal, 150, 255); 
  colorMode(RGB); 
  
  rectMode(CENTER);
  let squareX = 270 + sin(frameCount * 0.02) * 40;
  rect(squareX, 70, 130, 130);
  
  strokeWeight(3);
  let lineY = 100 + sin(frameCount * 0.03) * 20;
  line(40, 10, 500, lineY);
  
  strokeWeight(6);
  let lineX = 580 + cos(frameCount * 0.02) * 20;
  line(lineX, 130, 300, 390);

  noFill();
  strokeWeight(6);
  let angleEnd = radians(150) + frameCount * 0.02;
  arc(270, 250, 200, 200, 0, angleEnd);
}


function keyPressed() {
  if (key === 's' || key === 'S') {

    saveGif('mydraw', 4);
  }
}