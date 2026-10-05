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
  size: 50,
  fill: "#cbb6ec"
};

const cubito = {
    x: 200,
    y:100,
    size: 50,
    fill: "rgba(116, 19, 87, 0.73)"

};


let oldX = 200;
let oldY = 200;

/**
 Bolita and Cubito are two shapes that will follow the mouse when it is dragged. Once you click and drag the mouse, the shape will follow the mouse and copy the shape in a different position. If the mouse is in the top half of the canvas, the shape will be a circle, and if it is in the bottom half, it will be a square.
*/
function setup() {

    createCanvas(400, 400);
    

}


function draw() {

  background("#d6b005");


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
  ellipse(oldX, oldY, bolita.size);
  pop();
}

function drawCubito() {
  push();
  noStroke();
  fill(cubito.fill);
  rect(cubito.x, cubito.y, cubito.size);
  rect(oldX, oldY, cubito.size);
  pop();
}

function mouseDragged() {
    //this makes the shape follow the mouse but with a little delay
    oldX = mouseX -60;
    oldY = mouseY;

}



