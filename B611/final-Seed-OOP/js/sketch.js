let colorStem = [
  [56, 130, 60], // green
  [250, 80, 80], //pink
  [120, 150, 190], //blue
];

let colorRange = [
  [
    [56, 142, 60],
    [255, 245, 157],
  ],
  [
    [255, 234, 221],
    [255, 102, 102],
  ],
  [
    [130, 170, 227],
    [234, 253, 252],
  ],
];
let layerNum = 5;
let seeds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for(let r = 0; r <= layerNum; r ++){
    for(let i = 0; i < 2 * PI; i += (2 * PI) / (11 + r * 3)){
      seeds.push(new Seed(width / 2, height / 2, r, i, 1, 1, 0));
    }
    

  }
}

function draw() {

}

class Seed {
  constructor(x, y, layer, sdPos, dirx, diry, ci) {
    this.x = x;
    this.y = y;

    this.layer = layer;
    this.seedPos = sdPos;

    this.xSpd = 0;
    this.ySpd = 0;
    this.dirx = dirx;
    this.diry = diry;

    this.ifFly = false;

    this.colorIndex = ci;
  }

  update() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  display() {
    push();
    translate(this.x, this.y);
    this.drawSeed();
    pop();
  }

  whetherfly() {
    if (mouseIsPressed) {
      this.ifFly = true;
    }
    if (this.iffly == true) {
      this.fly();
    }
  }

  fly() {
    this.xSpd += random(-0.01, 0.01) + random(0, this.dirx);
    this.ySpd += random(-0.01, 0.01) - random(0, this.diry);
  }

  drawSeed() {
    push();
    let x1 = sin((PI / 2) * (this.layer + 1) + this.seedPos) * (40 + this.layer * 20);
    let y1 = cos((PI / 2) * (this.layer + 1) + this.seedPos) * (40 + this.layer * 20);
    fill(
      map(fluct, -1, 1, colorRange[this.colorIndex][0][0], colorRange[this.colorIndex][1][0]),
      map(fluct, -1, 1, colorRange[this.colorIndex][0][1], colorRange[this.colorIndex][1][1]),
      map(fluct, -1, 1, colorRange[this.colorIndex][0][2], colorRange[this.colorIndex][1][2])
    );
    circle(x1, y1, map(sin(i + frameCount * 0.05), -1, 1, 3, 6 + this.layer * 3.5));
    pop();
  }
}

class Core{
  constructor(x, y, ci){
    this.x = x;
    this.y = y;
    this.colorIndex = ci;
  }

  display(){
    push();
    translate(this.x, this.y);
    pop();

  }

  update(){

  }

  drawStem(){
    push();
    strokeWeight(3);
    stroke(colorStem[this.colorIndex][0], colorStem[this.colorIndex][1], colorStem[this.colorIndex][2], a);
    line(0, 0, 0, l);
    noStroke();
    pop();
  }
}
