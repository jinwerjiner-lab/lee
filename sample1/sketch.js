function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(230);
  stroke(0);
  strokeWeight(5);
  
  fill(255);
  triangle(300, 200, 550, 10, 550, 200);
  
  fill(255, 0, 0);
  rectMode(CORNER);
rect(50, 30, 200, 300);
  
  fill(0, 255, 0);;
  rectMode(CORNER);
rect(200, 300, 350, 70);
  
  fill(0, 0, 255);
  ellipse(270, 250, 150, 150);
  
  fill(255, 255, 0);
  rectMode(CENTER);
rect(270, 70, 130, 130);
  
  strokeWeight(3);
  line(40, 10, 500, 100);
  
  strokeWeight(6);
  line(580, 130, 300, 390);

  noFill();
  strokeWeight(6);
  arc(270, 250, 200, 200, 0, radians(150));
  
  fill(255);
  strokeWeight(3);
  arc(270, 250, 100, 100, 0, radians(290));
  
  strokeWeight(13);
  point(273, 248)
}