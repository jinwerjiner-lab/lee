function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(165, 220, 140);

  noStroke();
  fill(210);
  rect(50, 360, 300, 240, 50, 50, 0, 0); 
  
  fill(255);
  ellipse(70, 510, 85, 280);
  ellipse(330, 510, 85, 280);

  stroke(180);
  strokeWeight(10);
  noFill();
  arc(200, 370, 130, 90, 0, PI);
  
  noStroke();
  fill(240); 
  circle(185, 430, 10);
  circle(185, 480, 10);
  circle(185, 530, 10);

  noStroke();
  fill(165, 220, 190);
  textSize(80);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("S", 260, 460);
  
  noStroke();
  fill(255);
  textSize(70);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("S", 260, 460);

  fill(255, 220, 190);
  noStroke();
  ellipse(200, 260, 200, 240);
  
  fill(30);
  arc(200, 230, 210, 230, PI, TWO_PI);
  ellipse(160, 170, 80, 90);
  ellipse(240, 170, 80, 90);
  ellipse(200, 160, 100, 80);

  fill(255);
  ellipse(160, 260, 40, 20);
  ellipse(240, 260, 40, 20);
  
  fill(0);
  circle(160, 260, 18);
  circle(240, 260, 18);
  
  fill(255);
  circle(165, 255, 5);
  circle(245, 255, 5);

  stroke(0);
  strokeWeight(5);
  line(140, 230, 180, 235);
  line(220, 235, 260, 230);

  noFill();
  stroke(150, 100, 80);
  arc(200, 300, 20, 10, 0, PI);
  
  stroke(180, 80, 80);
  strokeWeight(3);
  bezier(160, 340, 180, 360, 220, 360, 240, 340);
}