/**
Variables Challenge 
 Luciana Garcia Cadillo
 * 
 * Practice using variables 
 */

/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 0,
    g: 0,
    b: 0
  }
};

let sky = {
    background: {r: 76, g: 183, b: 212}
};

let bird = {
    X: 200,
    Y: 30,
    birdsize: 20,
    r: 183,
    g: 255,
    b: 181
};

let shake = 0

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {

  background(sky.background.r, sky.background.g, sky.background.b);
  sky.background.r = sky.background.r -1
  sky.background.g = sky.background.g -1
  sky.background.b = sky.background.b -1
  



  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  mrFurious.fill.r = constrain(mrFurious.fill.r , 0, 255);
  mrFurious.fill.g = constrain(mrFurious.fill.g , 0, 0);
  mrFurious.fill.b = constrain(mrFurious.fill.b , 0, 0);
  mrFurious.fill.r = mrFurious.fill.r +1

  fill(bird.r, bird.g, bird.b);
  ellipse(bird.X, bird.Y, bird.birdsize, bird.birdsize);

  bird.X = bird.X - 1;
  bird.X = constrain(bird.X, 0, width-100);



  mrFurious.x = mrFurious.x + random(-shake, shake);
  mrFurious.y = mrFurious.y + random(-shake, shake);

  shake= shake +0.02;
  shake= constrain(shake,0,10);

  mrFurious.x = constrain(mrFurious.x,0,200);
  mrFurious.y = constrain(mrFurious.y,0,200);

  
  
  


  
}