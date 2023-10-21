let openEye = 1;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  //hair
  let hairX = map(sin(frameCount * 0.01), -1, 1, -20, 20);
  let hairY = map(cos(frameCount * 0.01), -1, 1, -100, -90);
  strokeWeight(2);
  stroke(125, 206, 19);
  noFill();
  bezier(hairX, hairY, 0, -70, 0, -30, 0, -30);
  
  //head
  for(i = 0; i < 100; i++){
    noStroke();
    fill(244,206,20,10-floor(map(i, 0, 99, 5, 0)));
    circle(hairX,hairY,i * 0.35);
    fill(255,35-floor(map(i, 0, 99, 5, 0)));
    ellipse(0,0, 25+i); 
  }
  fill(244,206,10);
  circle(hairX,hairY, 15);
  stroke(0);
  strokeWeight(5);
  
  
  //eyes
  let leftOffsetX = map(mouseX, 0, 200, -10, 0);
  let rightOffsetX = map(mouseX, 200, 400, 0, 10);
  if(openEye == 1){
    if(mouseX > 200){
      line(-16 + rightOffsetX, -3, -16 + rightOffsetX, 3);
      line(16 + rightOffsetX, -3, 16 + rightOffsetX, 3);
    } else{
      line(-16 + leftOffsetX, -3, -16 + leftOffsetX, 3);
      line(16 + leftOffsetX, -3, 16 + leftOffsetX, 3);
    }
    
  } else{
    if(mouseX > 200){
      line(-18 + rightOffsetX, -1.5, -13 + rightOffsetX, -1.5);
      line(18 + rightOffsetX, -1.5, 13 + rightOffsetX, -1.5);
    }else{
      line(-18 + leftOffsetX, -1.5, -13 + leftOffsetX, -1.5);
      line(18 + leftOffsetX, -1.5, 13 + leftOffsetX, -1.5);
    }
  }
  
  
  //scarf2
  push();
  noStroke();
  fill(216,180,3);
  beginShape();
  vertex(53, 28);
  bezierVertex(85, 20 + floatRate(0.03, -50, 40), 85, 20 + floatRate(0.04, -50, 40), 150,22+ floatRate(0.02, -50, 46));
  vertex(138, 60+ floatRate(0.02, -50, 48));
  bezierVertex(85, 45 + floatRate(0.03, -50, 40), 85, 45 + floatRate(0.04, -50, 40), 50,45);
  endShape();
  pop();
  
  // cloth
  push();
  noStroke();
  fill(91, 179, 24);
  beginShape();
  vertex(-55, 53);
  bezierVertex(-61 + floatRate(0.03, -10, 10), 80, -70 + floatRate(0.02, -10, 10), 100, -75 + floatRate(0.025, -6, 6),150);
  vertex(75 + floatRate(0.025, 6, -6), 150);
  bezierVertex(70 + floatRate(0.03, 10, -10), 100, 61 + floatRate(0.02, 10, -10), 80, 55,53);
  endShape();
  
  //lower edge
  fill(43, 122, 11);
  beginShape();
  vertex(-75 + floatRate(0.025, -6, 6),150);
  bezierVertex(-35, 120 + floatRate(0.03, -20, 20), 35 , 130+ floatRate(0.025, 20, -20), 75 + floatRate(0.025, 6, -6), 150);
  vertex(75 + floatRate(0.025, 6, -6), 150);
  bezierVertex(35, 160 + floatRate(0.02, -10, 10), -35, 170 + floatRate(0.03, 10, -10), -75 + floatRate(0.025, -6, 6),150);
  endShape();
  pop();
  
  
  //scarf1
  noStroke();
  fill(244,206,10);
  beginShape();
  vertex(-55, 28);
  bezierVertex(-15, 40, 15, 40, 55, 28);
  vertex(55, 53);
  bezierVertex(15, 65, -15, 65, -55, 53);
  endShape();
  
 
}
function keyPressed(){
  openEye *= -1;
  if (key === "s") {
    saveGif("prince-1.1", 3);
  }
}

function floatRate(f, min, max){
  let scarfFluctY = map(sin(frameCount * f), -1.6, 1.6, min, max);
  return scarfFluctY;
}

