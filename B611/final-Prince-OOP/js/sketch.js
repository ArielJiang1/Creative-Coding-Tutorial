let openEye = 1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noStroke();
  
  
  for(i = 0; i < 100; i++){
    fill(255,13-floor(map(i, 0, 99, 5, 0)));
    ellipse(0,0, 25+i);
     
  }
  stroke(0);
  strokeWeight(5);
  if(openEye == 1){
    line(-15, -3, -15, 3);
    line(15, -3, 15, 3);
  } else{
    line(-19, -1.5, -13, -1.5);
    line(19, -1.5, 13, -1.5);
  }
  
 
}
function keyPressed(){
  openEye *= -1;
}