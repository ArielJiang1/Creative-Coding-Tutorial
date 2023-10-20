# B611
## F23 Creative Coding Lab Final

### MagicDande in OOP
#### Basic OOP Structure
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
Seems good. Now let's think about how to animate the eyes. 

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
