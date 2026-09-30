/**
 Variables Prototype #2
 * Luciana Garcia Cadillo
 * 
 * Learning how to use variables. 
 
/**
*/

"use strict";

let lilbug = {
    x: 200,
    y: 200,
    size: 20,
    speedX: 2,
    speedY: 1,

    fill: {
    r: 255,
    g: 200,
    b: 105,
    }

}

let lilbug2 = {
    x: 100,
    y: 190,
    size: 30,
    speedX: 0.5,
    speedY: -2,

    fill: {
    r: 144,
    g: 222,
    b: 158,
    }

}

let lilbug3 = {
    x: 80,
    y: 280,
    size: 20,
    speedX: 2.1,
    speedY: -2,

    fill: {
    r: 224,
    g: 52,
    b: 144,
    }

}

let lilbug4 = {
    x: 430,
    y: 180,
    size: 23,
    speedX: 2,
    speedY: -0.1,

    fill: {
    r: 166,
    g: 206,
    b: 237,
    }

}

let lilbug5 = {
    x: 400,
    y: 300,
    size: 23,
    speedX: -5,
    speedY: 2,

    fill: {
    r: 197,
    g: 166,
    b: 237,
    }

}

let lilbigbug = {
    x: 300,
    y: 200,
    width:15,
    height: 50,
    speedX: 1,
    speedY: -1,

    fill: {
    r: 247,
    g: 244,
    b: 166,
    }
}

let lilbigbug2 = {
    x: 300,
    y: 200,
    width:15,
    height: 50,
    speedX: -1,
    speedY: -2,

    fill: {
    r: 247,
    g: 244,
    b: 166,
    }
}




/**
 * Bunch of lil bugs flying
*/

let backgroundColor = {r: 60, g: 12, b: 79};

function setup() {
     createCanvas(600, 400);
      background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
   
}


/**
 * Little rect go crazyy
*/
function draw() {

  background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
  backgroundColor.r = backgroundColor.r +0.1
  backgroundColor.g = backgroundColor.g +0.003
  backgroundColor.b = backgroundColor.b -0.1




  push();
  noStroke();
  fill(lilbug.fill.r, lilbug.fill.g, lilbug.fill.b);
  rect(lilbug.x, lilbug.y, lilbug.size);
  pop();

  lilbug.x = lilbug.x + lilbug.speedX;
  lilbug.y = lilbug.y + lilbug.speedY;

  push();
  noStroke();
  fill(lilbug2.fill.r, lilbug2.fill.g, lilbug2.fill.b);
  rect(lilbug2.x, lilbug2.y, lilbug2.size);
  pop();

  lilbug2.x = lilbug2.x + lilbug2.speedX;
  lilbug2.y = lilbug2.y + lilbug2.speedY;

  push();
  noStroke();
  fill(lilbug3.fill.r, lilbug3.fill.g, lilbug3.fill.b);
  rect(lilbug3.x, lilbug3.y, lilbug3.size);
  pop();

  lilbug3.x = lilbug3.x + lilbug3.speedX;
  lilbug3.y = lilbug3.y + lilbug3.speedY;

  push();
  noStroke();
  fill(lilbug4.fill.r, lilbug4.fill.g, lilbug4.fill.b);
  rect(lilbug4.x, lilbug4.y, lilbug4.size);
  pop();

  lilbug4.x = lilbug4.x + lilbug4.speedX;
  lilbug4.y = lilbug4.y + lilbug4.speedY;

  push();
  noStroke();
  fill(lilbug5.fill.r, lilbug5.fill.g, lilbug5.fill.b);
  rect(lilbug5.x, lilbug5.y, lilbug5.size);
  pop();

  lilbug5.x = lilbug5.x + lilbug5.speedX;
  lilbug5.y = lilbug5.y + lilbug5.speedY;
  
  push();
  noStroke();
  fill(lilbigbug.fill.r, lilbigbug.fill.g, lilbigbug.fill.b);
  rect(lilbigbug.x, lilbigbug.y, lilbigbug.width, lilbigbug.height);
  pop();

  lilbigbug.x = lilbigbug.x + lilbigbug.speedX;
  lilbigbug.y = lilbigbug.y + lilbigbug.speedY;

  push();
  noStroke();
  fill(lilbigbug2.fill.r, lilbigbug2.fill.g, lilbigbug2.fill.b);
  rect(lilbigbug2.x, lilbigbug2.y, lilbigbug2.width, lilbigbug2.height);
  pop();

  lilbigbug2.x = lilbigbug2.x + lilbigbug2.speedX;
  lilbigbug2.y = lilbigbug2.y + lilbigbug2.speedY;


}