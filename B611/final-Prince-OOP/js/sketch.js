let openEye = 1;
let eyeCount = 0;

let prince;

function setup() {
  createCanvas(windowWidth, windowHeight);
  prince = new Prince(width / 2, height / 2, 0, -90);
}

function draw() {
  background(0);

  let eyeOffsetX = map(mouseX, 0, width, -20, 20);
  let eyeOffsetY = map(mouseY, 0, height, -26, 10);

  prince.update(eyeOffsetX, eyeOffsetY);
  prince.display();
  // if (openEye == 1) {
  //   if (mouseX > 200) {
  //     line(-16 + rightOffsetX, -3, -16 + rightOffsetX, 3);
  //     line(16 + rightOffsetX, -3, 16 + rightOffsetX, 3);
  //   } else {
  //     line(-16 + leftOffsetX, -3, -16 + leftOffsetX, 3);
  //     line(16 + leftOffsetX, -3, 16 + leftOffsetX, 3);
  //   }
  // } else {
  //   if (mouseX > 200) {
  //     line(-18 + rightOffsetX, -1.5, -13 + rightOffsetX, -1.5);
  //     line(18 + rightOffsetX, -1.5, 13 + rightOffsetX, -1.5);
  //   } else {
  //     line(-18 + leftOffsetX, -1.5, -13 + leftOffsetX, -1.5);
  //     line(18 + leftOffsetX, -1.5, 13 + leftOffsetX, -1.5);
  //   }
  // }
}
function keyPressed() {
  openEye *= -1;
  if (key === "s") {
    saveGif("prince-1.1", 3);
  }
}

function closeEye(start, end) {
  let amt = map(sin(frameCount * 0.1), -1, 1, 0, 1);
  return lerp(start, end, amt);
}

class Prince {
  constructor(x, y, hairX, hairY) {
    this.x = x;
    this.y = y;
    this.hairX = hairX;
    this.hairY = hairY;
    this.eyeX = 0;
    this.eyeY = 0;
    this.ifBlink = false;
    this.ifIdle = true;
    this.ifTalk = false;
    this.ifWalk = false;
  }

  display() {
    translate(this.x, this.y);
    this.drawHead();
    this.drawEye();
    this.drawCloth();
  }

  update(eyeX, eyeY) {
    push();
    if (this.ifIdle) {
      let hairX = map(sin(frameCount * 0.01), -1, 1, -20, 20);
      let hairY = map(cos(frameCount * 0.01), -1, 1, -100, -90);
      let yFloat = sin(frameCount * 0.008) * 0.3;
      this.eyeX = eyeX;
      this.eyeY = eyeY;
      this.hairX = hairX;
      this.hairY = hairY;
      this.y += yFloat;
    } else if (this.ifWalk) {
    }
    if (this.ifBlink) {
    }

    pop();
  }

  drawHead() {
    push();
    strokeWeight(2);
    stroke(125, 206, 19);
    noFill();
    bezier(this.hairX, this.hairY, 0, -70, 0, -30, 0, -30);
    for (let i = 0; i < 100; i++) {
      noStroke();
      fill(244, 206, 20, 10 - floor(map(i, 0, 99, 5, 0)));
      circle(this.hairX, this.hairY, i * 0.35);
      fill(255, 35 - floor(map(i, 0, 99, 5, 0)));
      ellipse(0, 0, 25 + i);
    }
    fill(244, 206, 10);
    circle(this.hairX, this.hairY, 15);
    stroke(0);
    strokeWeight(5);
    pop();
  }

  drawEye() {
    push();
    stroke(0);
    strokeWeight(5);
    translate(this.eyeX, this.eyeY);
    line(-16, -3, -16, 3);
    line(16, -3, 16, 3);
    pop();
  }

  drawCloth() {
    //scarf float
    push();
    noStroke();
    fill(216, 180, 3);
    beginShape();
    vertex(53, 28);
    bezierVertex(
      85,
      20 + this.floatRate(0.03, -50, 40),
      85,
      20 + this.floatRate(0.04, -50, 40),
      150,
      22 + this.floatRate(0.02, -50, 46)
    );
    vertex(138, 60 + this.floatRate(0.02, -50, 48));
    bezierVertex(
      85,
      45 + this.floatRate(0.03, -50, 40),
      85,
      45 + this.floatRate(0.04, -50, 40),
      50,
      45
    );
    endShape();
    pop();

    // cloth
    push();
    noStroke();
    fill(91, 179, 24);
    beginShape();
    vertex(-55, 53);
    bezierVertex(
      -61 + this.floatRate(0.03, -15, 5),
      80,
      -70 + this.floatRate(0.02, -15, 6),
      100,
      -75 + this.floatRate(0.025, -6, 6),
      150
    );
    vertex(75 + this.floatRate(0.025, 6, -6), 150);
    bezierVertex(
      70 + this.floatRate(0.03, 15, -6),
      100,
      61 + this.floatRate(0.02, 15, -5),
      80,
      55,
      53
    );
    endShape();

    //lower edge
    fill(43, 122, 11);
    beginShape();
    vertex(-75 + this.floatRate(0.025, -6, 6), 150);
    bezierVertex(
      -35,
      120 + this.floatRate(0.03, -16, 30),
      35,
      130 + this.floatRate(0.025, 30, -16),
      75 + this.floatRate(0.025, 6, -6),
      150
    );
    vertex(75 + this.floatRate(0.025, 6, -6), 150);
    bezierVertex(
      35,
      160 + this.floatRate(0.02, -10, 10),
      -35,
      170 + this.floatRate(0.03, 10, -10),
      -75 + this.floatRate(0.025, -6, 6),
      150
    );
    endShape();
    pop();

    //scarf
    push();
    noStroke();
    fill(244, 206, 10);
    beginShape();
    vertex(-54, 28);
    bezierVertex(-15, 40, 15, 40, 54, 28);
    vertex(55, 53);
    bezierVertex(15, 65, -15, 65, -55, 53);
    endShape();
    pop();
  }

  floatRate(f, min, max) {
    let scarfFluctY = map(sin(frameCount * f), -1.6, 1.6, min, max);
    return scarfFluctY;
  }

  blink() {}

  walkLeft() {}
  walkRight() {}
}
