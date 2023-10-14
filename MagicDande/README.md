# MagicDande Tutorial - F23 Creative Coding Lab Midterm

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
    <div style="flex: 1; text-align: center;">
        <img src="assets/blue-dande.png" width="300" height="300" style="display: block; margin-left: auto; margin-right: auto;">
    </div>
    <div style="flex: 2; text-align: left;">
        Welcome and nice to meet you, traveler from Earth!

        I'm Dandie and I'm part of the <font color="red">MagicDande</font> family living on planet B611. Timid and introvert by nature, I shy away from your touch.

        I light up the world with my colorful glow, and I bless the universe with my flying seeds that fly into the endless darkness.

        My Little Prince Carrot grew me using p5.js, a little bit of math, some logic, and a lot of playfulness!

        Oh dear traveler from Earth, are you ready to become the Little Prince of your one and only MagicDande?
    </div>

</div>

## Let's Begin!

### Pattern: Play with the For Loops and Create the Pattern!

```JavaScript
for (let r = 0; r < 6; r++) {
  for (let i = 0; i < 2 * PI; i += (2 * PI) / 12) {
    fill(255);
    noStroke();
    let x1 = sin(i) * (r * 20);
    let y1 = cos(i) * (r * 20);
    circle(x1, y1, 10);
  }
}
```

<img src="assets/mid-1.1.png" width="300" height="300" style="display: block;
  margin-left: auto;
  margin-right: auto;">

```Javascript
let x1 = sin(i) * (30 + r * 20);
let y1 = cos(i) * (30 + r * 20);
```

<img src="assets/mid-1.2.png" width="300" height="300" style="display: block;
  margin-left: auto;
  margin-right: auto;">

```JavaScript
let x1 = sin((PI / 5) * r + i) * (30 + r * 20);
let y1 = cos((PI / 5) * r + i) * (30 + r * 20);
```

<img src="assets/mid-1.3.png" width="300" height="300" style="display: block;
  margin-left: auto;
  margin-right: auto;">
<img src="assets/mid-1.3.2.png" width="300" height="300" style="display: block;
  margin-left: auto;
  margin-right: auto;">

```JavaScript
for (let r = 0; r < 6; r++) {
    for (let i = 0; i < 2 * PI; i += (2 * PI) / (11 + r * 3)) {
      fill(255);
      noStroke();
      let x1 = sin((PI / 2) * (r + 1) + i) * (40 + r * 20);
      let y1 = cos((PI / 2) * (r + 1) + i) * (40 + r * 20);
      circle(x1, y1, 10);
    }
}
```

<img src="assets/mid-1.4.png" width="300" height="300" style="display: block;
  margin-left: auto;
  margin-right: auto;">

```JavaScript
circle(x1, y1, 6 + r * 3.5);
```

<img src="assets/mid-1.5.png" width="300" height="300" style="display: block;
  margin-left: auto;
  margin-right: auto;">

```JavaScript
circle(x1, y1, map(sin(i + PI / 2), -1, 1, 3, 6 + r * 3.5));
```

<img src="assets/mid-1.6.png" width="300" height="300" style="display: block;
  margin-left: auto;
  margin-right: auto;">

### Motion: Make the Pattern Move!

### Swaying Effect: Sway in the Breeze of Early Autumn!

### Interaction: Don't Touch Me!

### Function: Become Elegant and Save Some Labor!

### Gradient Color: Shine!

## Live Site Links

- [Midterm Step1 - pattern](https://carrotliu.github.io/Creative-Coding-Tutorial/MagicDande/midterm-step1-pattern/).
- [Midterm Step2 - motion](https://carrotliu.github.io/Creative-Coding-Tutorial/MagicDande/midterm-step2-motion/).
- [Midterm Step3 - swaying effect](https://carrotliu.github.io/Creative-Coding-Tutorial/MagicDande/midterm-step3-swaying-effect/).
- [Midterm Step4 - interaction](https://carrotliu.github.io/Creative-Coding-Tutorial/MagicDande/midterm-step4-interaction/).
- [Midterm Step5 - function](https://carrotliu.github.io/Creative-Coding-Tutorial/MagicDande/midterm-step5-function/).
- [Midterm Step6 - gradient-color](https://carrotliu.github.io/Creative-Coding-Tutorial/MagicDande/midterm-step6-gradient-color/).
- [Midterm Complete Demo](https://carrotliu.github.io/Creative-Coding-Tutorial/MagicDande/midterm-complete/).
