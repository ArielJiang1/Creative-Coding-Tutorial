let openEye = 1;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  //hair
  let x = map(sin(frameCount * 0.01), -1, 1, -20, 20);
  let y = map(cos(frameCount * 0.01), -1, 1, -100, -90);
  
  strokeWeight(2);
  stroke(125, 206, 19);
  noFill();
  bezier(x, y, 0, -70, 0, -30, 0, -30);
  
  //head
  for(i = 0; i < 100; i++){
    noStroke();
    fill(244,206,20,10-floor(map(i, 0, 99, 5, 0)));
    circle(x,y,i * 0.35);
    fill(255,35-floor(map(i, 0, 99, 5, 0)));
    // stroke(244, 206, 20, 50);
    // strokeWeight(1);
    ellipse(0,0, 25+i); 
  }
  fill(244,206,10);
  circle(x,y, 15);
  stroke(0);
  strokeWeight(5);
  let leftOffsetX = map(mouseX, 0, 200, -10, 0);
  let rightOffsetX = map(mouseX, 200, 400, 0, 10);
  if(openEye == 1){
    if(mouseX > 200){
      line(-15 + rightOffsetX, -3, -15 + rightOffsetX, 3);
      line(15 + rightOffsetX, -3, 15 + rightOffsetX, 3);
    } else{
      line(-15 + leftOffsetX, -3, -15 + leftOffsetX, 3);
      line(15 + leftOffsetX, -3, 15 + leftOffsetX, 3);
    }
    
  } else{
    if(mouseX > 200){
      line(-19 + rightOffsetX, -1.5, -13 + rightOffsetX, -1.5);
      line(19 + rightOffsetX, -1.5, 13 + rightOffsetX, -1.5);
    }else{
      line(-19 + leftOffsetX, -1.5, -13 + leftOffsetX, -1.5);
      line(19 + leftOffsetX, -1.5, 13 + leftOffsetX, -1.5);
    }
  }
  // bezier(-50, 35, -10, 45, 10, 45, 50, 35);
  
  //scarf1
  noStroke();
  fill("#F4CE14");
  beginShape();
  vertex(-50, 35);
  bezierVertex(-10, 45, 10, 45, 50, 35);
  vertex(50, 60);
  bezierVertex(10, 70, -10, 70, -50, 60);
  endShape();
  
 
}
function keyPressed(){
  openEye *= -1;
}

