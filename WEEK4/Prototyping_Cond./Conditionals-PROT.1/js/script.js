/**
 * Conditionals- Prototype #1
 * Luciana Garcia Cadillo 
 * 
 * Leaning and practicing conditionals
 */

//I got my inspiration from https://openprocessing.org/@u250353/1053946. Specifically for the "mouseDragged" function. 

"use strict";

const bolita = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#cbb6ec"
};

const cubito = {
    x: 200,
    y:100,
    size: 100,
    fill: "#e3bb"

};

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

    createCanvas(400, 400);
    background("#d6b005");

}


function draw() {
  if (mouseY < 200) {
    moveBolita();
    drawBolita();
  }

  else if (mouseY > 200) {
    moveCubito();
    drawCubito();
  }
 
}

function moveBolita() {
  bolita.x = mouseX;
  bolita.y = mouseY;
}

function moveCubito() {
  cubito.x = mouseX;
  cubito.y = mouseY;
}

function drawBolita() {
  push();
  noStroke();
  fill(bolita.fill);
  ellipse(bolita.x, bolita.y, bolita.size);
  pop();
}

function drawCubito() {
  push();
  noStroke();
  fill(cubito.fill);
  rect(cubito.x, cubito.y, cubito.size);
  pop();
}

function mouseDragged() {

}



