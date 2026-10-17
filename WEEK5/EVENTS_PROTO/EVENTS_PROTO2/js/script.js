/**
 * Events Prototype 2
 * Luciana Garcia Cadillo
 *
 * Practicing and getting comfortable with different events
 *
 */

"use strict";



let Obstacle = {
    x: 200,
    y: 250,
    size: 50,
    fill: "#e7bc2f"
}

let Obstacle2 = {
    x: 100,
    y: 100,
    size: 50,
    fill: "#e7bc2f"
}

let Obstacle3 = {
    x: 300,
    y: 100,
    size: 50,
    fill: "#e7bc2f"
}

let Obstacle4 = {
    x: 300,
    y: 100,
    size: 50,
    fill: "#e7bc2f"
}

let Obstacle5 = {
    x: 300,
    y: 100,
    size: 50,
    fill: "#e7bc2f"
}

let Obstacle6 = {
    x: 300,
    y: 100,
    size: 50,
    fill: "#e7bc2f"
}


let Barsket = {
    x: 500,
    y: 0,
    width: 10,
    height: 900,
    fill: "#e7bc2f"
}





/**
 * Game sort of set up
*/
function setup() {
    createCanvas(600,400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background ("rgb(116, 116, 11)")



    drawObstacle()
    drawObstacle2()
    drawObstacle3()
    drawObstacle4()
    drawObstacle5()
    drawBarsket()


}

/**
 * Displays the obstable
 */
function drawBall() {
  push();
  noStroke();
  fill(Ball.fill);
  ellipse(Ball.x, Ball.y, Ball.size);
  pop();
}

function drawBall2() {
  push();
  noStroke();
  fill(Ball2.fill);
  ellipse(Ball2.x, Ball2.y, Ball2.size);
  pop();
}

function drawBall3() {
  push();
  noStroke();
  fill(Ball3.fill);
  ellipse(Ball3.x, Ball3.y, Ball3.size);
  pop();
}

function drawBall4() {
  push();
  noStroke();
  fill(Ball4.fill);
  ellipse(Ball4.x, Ball4.y, Ball4.size);
  pop();
}

function drawBall5() {
  push();
  noStroke();
  fill(Ball5.fill);
  ellipse(Ball5.x, Ball5.y, Ball5.size);
  pop();
}

function drawBarsket() {
  push();
  noStroke();
  fill(Barsket.fill);
  rect(Barsket.x, Barsket.y, Barsket.width, Barsket.height);
  pop();
}

function mousePressed() {

    if (dis(mouseX,mouseY))
}

