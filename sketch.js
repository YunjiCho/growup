let sunx = 0;
let leafx = 0;
let sunspeed = 0.01;
let leafspeed = 0.001;
let d = 5;
let lsx = 0;
let growth = true;
function setup() {
  canvas = createCanvas(1000, 800);
   canvas.position(windowWidth/2-800/2,windowHeight/2-800/2);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  sun();
  tree(-120 + width / 3, 650);
  tree(-120 + (width / 3) * 2, 650);
  tree(-120 + width, 650);
  flower(-120 + width / 3, 650, "rgb(255,0,0)");
  flower(-120 + (width / 3) * 2, 650, "#FFC107");
  flower(-120 + width, 650, "#CDDC39");
  leaf(-120 + width / 3, 650);
  leaf1(-120 + (width / 3) * 2, 650);
  leaf2(-120 + width, 650);
}

function sun() {
  let len = 5;
  background("#09B1DF");
  push();
  translate(width / 4, height / 4);

  for (let i = 0; i < 40; i++) {
    for (let r = 10; r < 50; r += 5) {
      strokeWeight(8);
      stroke(255, 255 - 4 * i, 0, 100);
      rotate(radians(r));
      line(-50 + len * i, -50 + len * i + sunx, 50 - len * i, len * i);
      sunx = sunx - sunspeed;
    }
  }
  pop();
}

function leaf(tx, ty) {
  let len = 4;
  push();
  translate(tx, ty);

  for (let i = 0; i < 30; i++) {
    for (let r = 10; r < 50; r += 5) {
      strokeWeight(9);
      stroke(40 - 1 * i, 80 + 4 * i, 10 - 1 * i, 170);
      rotate(radians(r));
      line(-50 + len * i +leafx/4-lsx, -50 + len * i, 50 - len * i-lsx, len * i-leafx);
      leafx = leafx - leafspeed;
      if (leafx < -150 || leafx > 150) {
        leafspeed = leafspeed * -1;
      }
    }
  }
  pop();
}
function leaf1(tx, ty) {
  let len =3;
  push();
  translate(tx, ty);

  for (let i = 0; i < 30; i++) {
    for (let r = 10; r < 50; r += 5) {
      strokeWeight(9);
      stroke(40 - 1 * i, 80 + 4 * i, 10 - 1 * i, 170);
      rotate(radians(r));
      line(-50 + len * i , -50 + len * i- leafx, 50 - len * i, len * i);
      leafx = leafx - leafspeed;
      if (leafx < -150 || leafx > 150) {
        leafspeed = leafspeed * -1;
      }
    }
  }
  pop();
}
function leaf2(tx, ty) {
  let len = 4;
  push();
  translate(tx, ty);

  for (let i = 0; i < 30; i++) {
    for (let r = 10; r < 50; r += 5) {
      strokeWeight(9);
      stroke(40 - 1 * i, 80 + 4 * i, 10 - 1 * i, 170);
      rotate(radians(r));
      line(-50 + len * i+leafx , -50 + len * i+leafx, 50 - len * i, len * i);
      leafx = leafx - leafspeed;
      if (leafx < -150 || leafx > 150) {
        leafspeed = leafspeed * -1;
      }
    }
  }
  pop();
}
function flower(tx, ty, c) {
  fill(c);
  noStroke();
  ellipse(tx, ty, 100, 100);
}
function tree(tx, ty) {
  fill("rgb(165,99,42)");
  noStroke();
  rect(tx, ty + 80, 40, 200);
}
