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
let cores = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  layerNum = floor(random(1, 6));
  for (let r = 0; r <= layerNum; r++) {
    for (let i = 0; i < 2 * PI; i += (2 * PI) / (11 + r * 3)) {
      seeds.push(new Seed(width / 2, height / 2, r, i, 1, 1, 0));
    }
  }
}

function draw() {}

class Seed {
  constructor(x, y, layer, sdPos, dirx, diry, ci) {
    this.x = x;
    this.y = y;
    this.coreX = 0;
    this.coreY = 0;
    this.seedX = 0;
    this.seedY = 0;

    this.layer = layer;
    this.seedPos = sdPos;

    this.xSpd = 0;
    this.ySpd = 0;
    this.dirx = dirx;
    this.diry = diry;

    this.dmouse = dist(
      x + width / 2 + distFromCentX,
      y + height / 2 + distFromCentY,
      mouseX,
      mouseY
    );
    this.ifHovered = false;
    this.ifClicked = false;
    this.ifFly = false;

    this.colorIndex = ci;
  }

  update() {
    if (!this.ifFly) {
      this.coreX = map(sin(frameCount * 0.01), -1, 1, -60, 60);
      this.coreY = map(cos(frameCount * 0.01), -1, 1, -10, 0);
      this.seedX =
        sin((PI / 2) * (this.layer + 1) + this.seedPos) *
        (40 + this.layer * 20);
      this.seedY =
        cos((PI / 2) * (this.layer + 1) + this.seedPos) *
        (40 + this.layer * 20);
    } else {
      this.coreX += this.xSpd;
      this.y1 += this.ySpd;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    this.drawSeed();
    pop();
  }

  hovered() {}

  clicked() {}

  fly() {
    if (this.ifFly == true) {
      this.xSpd += random(-0.01, 0.01) + random(0, this.dirx);
      this.ySpd += random(-0.01, 0.01) - random(0, this.diry);
    }
  }

  drawSeed() {
    push();
    translate(this.coreX + this.seedX, this.coreY + this.seedY);
    let fluct1 = sin((PI / 2) * (this.layerNum + 1) + this.seedPos);
    this.assignColor(fluct1);
    circle(
      0,
      0,
      map(sin(this.seedPos + frameCount * 0.05), -1, 1, 3, 6 + this.layer * 3.5)
    );
    pop();
  }
  drawSeedStem() {
    if (!this.ifFly) {
      push();
      stroke(255, 100);
      strokeWeight(map(sin(this.seedPos + frameCount * 0.05), -1, 1, 0.01, 2));
      line(this.coreX, this.coreY, this.seedX, this.seedY);
      pop();
    }
  }

  assignColor(fluct) {
    if (this.ifHovered) {
    } else if (this.ifClicked) {
    } else {
      fill(
        map(
          fluct,
          -1,
          1,
          colorRange[this.colorIndex][0][0],
          colorRange[this.colorIndex][1][0]
        ),
        map(
          fluct,
          -1,
          1,
          colorRange[this.colorIndex][0][1],
          colorRange[this.colorIndex][1][1]
        ),
        map(
          fluct,
          -1,
          1,
          colorRange[this.colorIndex][0][2],
          colorRange[this.colorIndex][1][2]
        )
      );
    }
  }
}

class Core {
  constructor(x, y, layerNum, ci) {
    this.x = x;
    this.y = y;
    this.layerNum = layerNum;
    this.coreX = 0;
    this.coreY = 0;

    this.colorIndex = ci;
  }

  display() {
    push();
    translate(this.x, this.y);
    this.drawDandeStem();
    this.drawCore();
    pop();
  }

  update() {
    this.coreX = map(sin(frameCount * 0.01), -1, 1, -60, 60);
    this.coreY = map(cos(frameCount * 0.01), -1, 1, -10, 0);
  }
  drawCore() {
    push();
    circle(this.coreX, this.coreY, map(this.layerNum, 1, 8, 16, 38));
    pop();
  }

  drawDandeStem() {
    push();
    strokeWeight(3);
    stroke(
      colorStem[this.colorIndex][0],
      colorStem[this.colorIndex][1],
      colorStem[this.colorIndex][2],
      a
    );
    line(0, 0, 0, l);
    noStroke();
    pop();
  }
}

let rV = colorBase[ci][0];
let gV = colorBase[ci][1];
let bV = colorBase[ci][2];
push();
translate(transX, transY);
stroke(rV, gV, bV);
strokeWeight(5);
push();
translate(0, 300);
let x1 = map(sin(frameCount * 0.01), -1, 1, -60, 60);
let y1 = map(cos(frameCount * 0.01), -1, 1, -10, 0);
pop();
push();
noFill();
bezier(x1, y1, 0, 150, 0, 500, 0, 500);
pop();
for (let r = 0; r < layerNum; r++) {
  for (let i = 0; i < 2 * PI; i += (2 * PI) / (11 + r * 3)) {
    let fly = false;
    let x = x1 + sin((PI / 2) * (r + 1) + i) * (40 + r * 20);
    let y = y1 + cos((PI / 2) * (r + 1) + i) * (40 + r * 20);
    let distFromCentX = transX - width / 2;
    let distFromCentY = transY - height / 2;
    let dmouse = dist(
      x + width / 2 + distFromCentX,
      y + height / 2 + distFromCentY,
      mouseX,
      mouseY
    );
    // if (dmouse <= 20) {
    //   y += map(dmouse, 0, 20, 10, 0);
    //   x += map(dmouse, 0, 20, 10, 0);
    // }

    let fluctation = sin((PI / 2) * (r + 1) + i);
    assignColor(ci, fluctation);
    noStroke();
    circle(x, y, map(sin(i + frameCount * 0.05), -1, 1, 3, 6 + r * 3.5));
  }
}
let fluctation2 = sin(PI / 2 + frameCount * 0.01);
assignColor(ci, fluctation2);
// fill(map(sin(PI / 2 + frameCount * 0.01), -1, 1, 10, 230), 215, 80);
circle(x1, y1, map(layerNum, 1, 8, 16, 38));
pop();
