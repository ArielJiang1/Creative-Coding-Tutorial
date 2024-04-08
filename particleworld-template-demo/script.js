// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 100; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), height);
  }
}

function draw() {
  background(255);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.applyWind();
    p.stop();
    if (p.y > height) {
      particles.splice(1, 1);
    }
  }
  if (particles.length == 0) {
    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
      particles[i] = new Particle(random(width), height);
    }
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.xSpd = random(0.8, 2);
    this.ySpd = random(0.8, 2);
    this.dia = random(10, 40);
    this.dir = 1;
  }
  // methods (functions): particle's behaviors
  update() {
    console.log(this.y);
    // (add) 
    this.x += this.xSpd * this.dir;
    this.y -= this.ySpd;
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    noStroke()
    fill(random(200, 255), random(170, 180), 204)
    circle(0, 0, this.dia * 0.72);
    circle(this.dia * 0.67, 0, this.dia * 0.72)
    triangle(this.dia * 0.3, this.dia, this.dia * 1.05, 2, -this.dia / 2.8, 3)


    pop();
  }
  applyWind() {
    if (mouseX < width / 2) {
      this.dir = 1;
    } else {
      this.dir = - 2;
    }
  }
  stop() {
    if (this.y <= 0) {
      this.ySpd = 0;
      this.xSpd = 0;

    }
  }
}
