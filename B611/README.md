# B611
## F23 Creative Coding Lab Final

### MagicDande in OOP
#### Basic OOP Structure
There are three basic methods inside a class: 
1. the constructor, which only runs for once (similar to our setup
 function) when a new instance of the class is constructed. In the constructor, we define all the variables that we want to use globally in all the methods. We write this.variableName omit the let when defining in the constructor.
2. the display ()
```JavaScript
class Seed {
    constructor() {
    }
    display() {
    }
    update() {
    }
}
```
### The Little Prince
#### Luminous
```JavaScript
function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  noStroke();
  for(i = 0; i < 100; i++){
    fill(255,13-floor(map(i, 0, 99, 5, 0)));
    ellipse(0,0, 25+i); 
  }
}
```
#### Floating Scarf
The Little Prince has a long, yellow scarf. 
It wraps around his neck:
```JavaScript
noStroke();
fill(244,206,10);
beginShape();
vertex(-55, 28);
bezierVertex(-15, 40, 15, 40, 55, 28);
vertex(55, 53);
bezierVertex(15, 65, -15, 65, -55, 53);
endShape();
```
But it's so long so that it leaves a long tail behind the little Prince:
```JavaScript
push();
noStroke();
fill(216,180,3); // make the color darker than that of the part around the neck
beginShape();
vertex(55, 28);
bezierVertex(85, 20, 85, 20, 150, 22);
vertex(138, 60);
bezierVertex(85, 45, 85, 45, 50, 45);
endShape();
pop();
```
It's floating in the wind:
```JavaScript
beginShape();
vertex(55, 28);
bezierVertex(85, 20 + scarfFluctY, 85, 20 + scarfFluctY, 150,22+ scarfFluctY);
vertex(138, 60+ scarfFluctY);
bezierVertex(85, 45 + scarfFluctY, 85, 45 + scarfFluctY, 50,45);
endShape();
```
Looks unnatural... The frequency of the fluctuation for each control point/anchor point remains the same. It needs more variation. 
Since the fluctuation is getting more complex, I'll make a function for it.

```JavaScript
function floatRate(f, min, max){
  let scarfFluctY = map(sin(frameCount * f), -1.6, 1.6, min, max);
  return scarfFluctY;
}
```
```JavaScript
beginShape();
vertex(53, 28);
bezierVertex(85, 20 + floatRate(0.03, -50, 40), 85, 20 + floatRate(0.04, -50, 40), 150,22+ floatRate(0.02, -50, 46));
vertex(138, 60+ floatRate(0.02, -50, 48));
bezierVertex(85, 45 + floatRate(0.03, -50, 40), 85, 45 + floatRate(0.04, -50, 40), 50,45);
endShape();
```
cloth
```JavaScript
push();
noStroke();
fill(91, 179, 24);
beginShape();
vertex(-55, 53);
bezierVertex(-61 + floatRate(0.03, -10, 10), 80, -70 + floatRate(0.02, -10, 10), 100, -75 + floatRate(0.025, -6, 6),150);
vertex(75 + floatRate(0.025, 6, -6), 150);
bezierVertex(70 + floatRate(0.03, 10, -10), 100, 61 + floatRate(0.02, 10, -10), 80, 55,53);
endShape();

```

```JavaScript
  //lower edge
  fill(43, 122, 11);
  beginShape();
  vertex(-75 + floatRate(0.025, -6, 6),150);
  bezierVertex(-35, 120 + floatRate(0.03, -20, 20), 35 , 130+ floatRate(0.025, 20, -20), 75 + floatRate(0.025, 6, -6), 150);
  vertex(75 + floatRate(0.025, 6, -6), 150);
  bezierVertex(35, 160 + floatRate(0.02, -10, 10), -35, 170 + floatRate(0.03, 10, -10), -75 + floatRate(0.025, -6, 6),150);
  endShape();
  pop();
```
Seems good. Now let's think about how to animate the eyes. 

```JavaScript
```
```JavaScript
```
```JavaScript
fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(1);
    circle(-61 + this.floatRate(0.03, -15, 5) - this.clothX * this.walkDir * 0.5,
    80 - this.clothX * this.walkDir * 1.2, 6);
    circle(-70 + this.floatRate(0.02, -15, 6) - this.clothX * this.walkDir * 0.3,
    100 + this.clothX * this.walkDir  * 0.5, 6);
    circle(70 + this.floatRate(0.03, 15, -6)  + this.floatRate(0.02, -15, 6) + this.clothX * this.walkDir * 0.3,
    100 - this.clothX * this.walkDir  * 0.5, 6);
    circle(61 + this.floatRate(0.02, 15, -5)  - this.clothX * this.walkDir * 0.5,
    80 + this.clothX * this.walkDir * 1.2, 6);
    line(-55, 53, -61 + this.floatRate(0.03, -15, 5) - this.clothX * this.walkDir * 0.5,
    80 - this.clothX * this.walkDir * 1.2);
    line(-75 + this.floatRate(0.025, -6, 6) - this.clothX * this.walkDir *1.5,
    150,-70 + this.floatRate(0.02, -15, 6) - this.clothX * this.walkDir * 0.3,
    100 + this.clothX * this.walkDir  * 0.5);
    line(75 + this.floatRate(0.025, 6, -6) - this.clothX * this.walkDir * 1.5,
    150, 70 + this.floatRate(0.03, 15, -6)  + this.floatRate(0.02, -15, 6) + this.clothX * this.walkDir * 0.3,
    100 - this.clothX * this.walkDir  * 0.5);
    line(61 + this.floatRate(0.02, 15, -5)  - this.clothX * this.walkDir * 0.5,
    80 + this.clothX * this.walkDir * 1.2,
    55,
    53);
```

#### The Little Prince is Winking!
Let's first try to switch the open and close eye using keyPressed:
```JavaScript
function draw(){
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
```


```JavaScript
```

### HTML + Javascript?

### Text Input

### BGM & Sound Effect

### Knowledge Covered:
(The topics with "**" cover advanced techniques. Think twice if your project really need the techniques before diving into these topics)
- structure: Objected Oriented Programming
- transform: rotate(); scale()
- sound: loadSound(); isPlaying(); play(); stop()
- interaction:  keyboard interaction
- HTML: html element above canvas; accessing html element in p5js
- ** JSON structure
- ** database: asynchronous Javascript; firebase register; firebase storage
- ** web socket

## Live Site Links
-
