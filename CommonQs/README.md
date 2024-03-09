# Common Questions from  CCLab 2024
## Table of Content
1. [Q1:Lifespan](#Q1-Lifespan)
2. [Q2:Partially BlendMode](#Q2-Partially-BlendMode)
3. [Q3:Pattern Background](#Q3-Pattern-Background)
4. [Q4:Scene Switch](#Q4-Scene-Switch)

## Step-by-step Explanation
### Q1-Lifespan
How to add and modify lifespan for my creatures based on interactions?
[p5-web-editor](https://editor.p5js.org/CarrotLiu/sketches/LJwbblAUp)
Let's borrow some smiling faces from [Marcela's in-class demo](https://editor.p5js.org/mg3273/sketches/E7B4fLMKb). Besides the x, y position and size, we also send an "a" variable into the function to change the transparency of the faces:
```JavaScript
function drawFace(x, y, s, a) {
  push();
  translate(x, y);
  //face
  fill(220, 80, 50, a);
  stroke(255);
  circle(0, 0, s);
  //eyes and mouth
  fill(255);
  circle(-s * 0.3, 0, s * 0.05);
  circle(s * 0.3, 0, s * 0.05);
  arc(0, 0, s * 0.3, s * 0.3, 0, PI);
  pop();
}
```
To create multiple faces, we need to store the x, y, a, and lifespan in arrays. 
```JavaScript
let x = [], y = [], a=[], lifespan = [];
let n = 5; // the number of faces you want to create
function setup(){
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < n; i++) {
    x[i] = random(width);
    y[i] = random(height);
    a[i] = 255;
    lifespan[i] = 6;
  }
}
```
The arrays are 
```JavaScript
function attack(){
  for(let i = 0; i < x.length; i ++){
    if(dist(x[i],y[i], mouseX, mouseY) < s[i]){
      lifespan[i] --;
      a[i] = map(lifespan[i], 0, 6, 0, 255);
    }
  }
}
```
The lifespan will be decreased when user clicks within the face. `dist(x[i],y[i], mouseX, mouseY) < s[i]` will measure the distance between the mouse and the face's position, and return `true` if the distance is smaller than the size of the current face.
using `a[i] = map(lifespan[i], 0, 6, 0, 255);`, we map the lifespan value (with it's current range from 0 to 6) to the range of face alpha value (0 to 255). In this way, the current

```JavaScript
function mousePressed(){
  attack();
}
```

### Q2-Partially-BlendMode
How to have the "blendMode" only affect some of the shapes on canvas?
[p5-web-editor](https://editor.p5js.org/CarrotLiu/sketches/LJwbblAUp)
By defalt, the blendMode is "BLEND". Let's draw a normal rectangle and fill it with red
```JavaScript
noStroke();
fill(255, 0, 0); // red color 
rect(50, 50, 100, 100);
```

```JavaScript
push();
fill(255, 0, 0); // still apply red color
blendMode(DIFFERENCE);
beginShape();
vertex(150, height / 2);
vertex(250, height / 2);
vertex(200, 280);
endShape(CLOSE);
pop();
```

### Q3-Pattern-Background
How to keep the landscape patterns as background while drawing animated creatures on top?

<img align="right" src="assets/Q3.1.1.jpg" width="360" >

[p5-web-editor](https://editor.p5js.org/CarrotLiu/sketches/JJtUjvEjJ)
Let's steal a pattern from [Moon's in-class demo](https://editor.p5js.org/MOQN/sketches/bGi5ZmoKq). First, put it into a for loop and runs it in `setup()`.
```JavaScript
let angle = 0;
let h = 50;
let x = 0;
function setup(){
    for (let i = 0; i < 200; i++) {
        angle += 72+0.2;
        x += -1;
        h += 0.2;
        push();
        translate(width/2, height/2);
        rotate( radians(angle) );
        //blendMode(ADD);
        noFill();
        stroke(255, 120, 10, 100);
        rect(x, 0, 120, h);
        pop();
    }
}
```

<img align="right" src="assets/Q3.1.2.jpg" width="360" >

Now we have a background with pattern. But if we try to animate a circle in `draw()`, it will leave a trace without a background in `draw()`:
```JavaScript
function draw(){
    noStroke();
    fill(255, 0, 0);
    circle(frameCount, height / 2, 100);
}
```
We cannot draw background in the `draw()` because it will cover the pattern.

$${\color{orange}Solution One: Using Graphic}$$
[createGraphic](https://p5js.org/reference/#/p5/createGraphics) is a special function in p5js. 
```JavaScript

```

$${\color{orange}Solution Two: Using Array}$$
Now, let's apply "Array"! Still, our aim is to have all the rectangles generated before the draw loop and then rendered as an "image" in the draw loop.
When we create rectangles in the for loop, we only have three variables -- $${\color{red} angle, x, h}$$ -- that vary in each loop and set each rectangle different from others. If we want a still pattern, the three variables need to be fixed for each rectangles every frame. To achieve this, we can first store these variables into arrays. 

```JavaScript
let patternX = [];
let patternH = [];
let patternA = [];
function setup() {
  createCanvas(400, 400);
  background(0);
  // here we take Moon's in-class demo as the pattern
  for (let i = 0; i < 200; i++) {
    angle += 72 + 0.2;
    x += -1;
    h += 0.2;
    patternX.push(x);
    patternH.push(h);
    patternA.push(angle);
  }
}
```
After doing this in the `setup()`, we will get three arrays that have equal number of items. 
```JavaScript
patternX = [x0, x1, x2, ..., x199] // length = 200
patternH = [h0, h1, h2, ..., h199] // length = 200
patternA = [a0, a1, a2, ..., a199] // length = 200
```
We can retrieve the variables from the array with the same index `i` (`patternX[i]`, `patternH[i]`, `patternA[i]`) in a for loop. 
```JavaScript
for(let i = 0; i < patternX.length; i ++){
    push();
    translate(width / 2, height / 2);
    rotate(radians(patternA[i]));
    noFill();
    stroke(255, 120, 10, 100);
    rect(patternX[i], 0, 120, patternH[i]);
    pop();
}
```
Now, if we put this for loop in the draw(), the pattern would stay still because the angle, x, and h stay the same every frame as long as the arrays are not updated.

### Q4-Scene-Switch
How to make gradient color transition with a specific color palette?
[p5-web-editor]()
```JavaScript

```





