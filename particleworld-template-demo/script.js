// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 100; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(-height, 0));
  }
}

function draw() {
  background(50);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.applyWind();
    p.stop();
    p.update();
    p.display();
    // if(p.y >= height){
    //   particles.splice(i, 1);
    //   // p.y = random(-height, 0);
    // }
  }
  if(particles.length ==0){
    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
      particles[i] = new Particle(random(width), random(-height, 0));
    }
  }
  
  
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.xspd=random(0, 0.8);
    this.yspd = random(0.5, 2);
    this.dia = random(3, 6);
    this.dir = 1;
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x += this.xspd * this.dir;
    this.y += this.yspd;
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    circle(0, 0, this.dia);

    pop();
  }
  applyWind(){
    if(mouseX < width / 2){
      this.dir = 1;
    }else{
      this.dir = -1;
    }
  }
  stop(){
    if(this.y >= height - 5){
      this.yspd = 0;
      this.xspd = 0;
    }
  }
}
