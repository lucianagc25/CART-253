/**
 Variables Prototype #3
 * Luciana Garcia Cadillo
 * 
 * Learning how to use variables. 
 
/**
*/

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!

*/

let line = {
    x: 5,
    y: 5,
    width: 50,
    height: 390,
    speedy: -2,


    fill: {
    r: 45,
    g: 20,
    b: 156,
    }

}

let line2 = {
    x: 60,
    y: 5,
    width: 50,
    height: 390,
    speedy: 2,


    fill: {
    r: 169,
    g: 235,
    b: 96,
    }

}

let line3 = {
    x: 115,
    y: 5,
    width: 50,
    height: 390,
    speedy: -2,


    fill: {
    r: 156,
    g: 20,
    b: 133,
    }

}

let line4 = {
    x: 170,
    y: 5,
    width: 50,
    height: 390,
    speedy: 2,


    fill: {
    r: 255,
    g: 137,
    b: 43,
    }

}

let line5 = {
    x: 225,
    y: 5,
    width: 50,
    height: 390,
    speedy: -2,


    fill: {
    r: 125,
    g: 21,
    b: 106,
    }

}

let line6 = {
    x: 280,
    y: 5,
    width: 50,
    height: 390,
    speed: 2,


    fill: {
    r: 250,
    g: 132,
    b: 202,
    }

}

let line7 = {
    x: 335,
    y: 5,
    width: 50,
    height: 390,
    speedy: -2,


    fill: {
    r: 63,
    g: 196,
    b: 166,
    }

}

let line8 = {
    x: 390,
    y: 5,
    width: 50,
    height: 390,
    speed: 2,


    fill: {
    r: 173,
    g: 186,
    b: 67,
    }

}

let line9 = {
    x: 445,
    y: 5,
    width: 50,
    height: 390,
    speedy: -2,


    fill: {
    r: 255,
    g: 71,
    b: 251,
    }

}




let backgroundColor = {r: 235, g: 156, b: 66};

function setup() {
     createCanvas(500, 400);
      background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
   
}


/**
 * Little rect go crazyy
*/
function draw() {

  background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
  //backgroundColor.r = backgroundColor.r +1
  //backgroundColor.g = backgroundColor.g +1
  //backgroundColor.b = backgroundColor.b -0.02



  push();
  noStroke();
  fill(line.fill.r, line.fill.g, line.fill.b);
  rect(line.x, line.y, line.width, line.height);
  pop();
  
  line.fill.r = line.fill.r +0.01
  line.fill.g = line.fill.g +1
  line.fill.b = line.fill.b +1

  line.y = line.y + line.speedy;

  push();
  noStroke();
  fill(line2.fill.r, line2.fill.g, line2.fill.b);
  rect(line2.x, line2.y, line2.width, line2.height);
  pop();

  line2.fill.r = line2.fill.r +0.01
  line2.fill.g = line2.fill.g +4
  line2.fill.b = line2.fill.b +1

  line2.y = line2.y + line2.speedy;

  push();
  noStroke();
  fill(line3.fill.r, line3.fill.g, line3.fill.b);
  rect(line3.x, line3.y, line3.width, line3.height);
  pop();

  line3.fill.r = line3.fill.r +0.01
  line3.fill.g = line3.fill.g +1
  line3.fill.b = line3.fill.b +3

  line3.y = line3.y + line3.speedy;

  push();
  noStroke();
  fill(line4.fill.r, line4.fill.g, line4.fill.b);
  rect(line4.x, line4.y, line4.width, line4.height);
  pop();

  line4.fill.r = line4.fill.r +0.01
  line4.fill.g = line4.fill.g +2
  line4.fill.b = line4.fill.b +1

  line4.y = line4.y + line4.speedy;

  push();
  noStroke();
  fill(line5.fill.r, line5.fill.g, line5.fill.b);
  rect(line5.x, line5.y, line5.width, line5.height);
  pop();

  line5.fill.r = line5.fill.r +0.01
  line5.fill.g = line5.fill.g +2
  line5.fill.b = line5.fill.b +3

  line5.y = line5.y + line5.speedy;

  push();
  noStroke();
  fill(line6.fill.r, line6.fill.g, line6.fill.b);
  rect(line6.x, line6.y, line6.width, line6.height);
  pop();

  line6.fill.r = line6.fill.r -3
  line6.fill.g = line6.fill.g +2
  line6.fill.b = line6.fill.b +0.001

  line6.y = line6.y + line6.speed;

  push();
  noStroke();
  fill(line7.fill.r, line7.fill.g, line7.fill.b);
  rect(line7.x, line7.y, line7.width, line7.height);
  pop();


  line7.fill.r = line7.fill.r +0.01
  line7.fill.g = line7.fill.g +0.8
  line7.fill.b = line7.fill.b +3

  line7.y = line7.y + line7.speedy;


  push();
  noStroke();
  fill(line8.fill.r, line8.fill.g, line8.fill.b);
  rect(line8.x, line8.y, line8.width, line8.height);
  pop();

  line8.fill.r = line8.fill.r +0.01
  line8.fill.g = line8.fill.g +0.9
  line8.fill.b = line8.fill.b +3.2

  line8.y = line8.y + line8.speed;

  push();
  noStroke();
  fill(line9.fill.r, line9.fill.g, line9.fill.b);
  rect(line9.x, line9.y, line9.width, line9.height);
  pop();

  line9.fill.r = line9.fill.r +0.01
  line9.fill.g = line9.fill.g +0.8
  line9.fill.b = line9.fill.b +3

  line9.y = line9.y + line9.speedy;





}