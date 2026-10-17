/**
 * Events Prototype 2
 * Luciana Garcia Cadillo
 *
 * Practicing and getting comfortable with different events
 *
 */

"use strict";

const Obstacle = {
    x: 200,
    y: 250,
    width: 50,
    height: 10,
    fill: "#e7bc2f"
}

const Obstacle2 = {
    x: 100,
    y: 100,
    width: 50,
    height: 10,
    fill: "#e7bc2f"
}

const Obstacle3 = {
    x: 300,
    y: 100,
    width: 50,
    height: 10,
    fill: "#e7bc2f"
}

const Obstacle4 = {
    x: 400,
    y: 250,
    width: 50,
    height: 10,
    fill: "#e7bc2f"
}


let mouseTriggerBall =  {
    x: 0,
    y: 200,
    size: 50,
    speed: 0,
    fillColor: {
        r: 100,
        g: 0,
        b: 255
    }


/**
 * Game sort of set up
*/
function setup() {
    createCanvas(600,400)

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


}

/**
 * Displays the obstable
 */
function drawObstacle() {
  push();
  noStroke();
  fill(Obstacle.fill);
  rect(Obstacle.x, Obstacle.y, Obstacle.width, Obstacle.height);
  pop();
}

function drawObstacle2() {
  push();
  noStroke();
  fill(Obstacle2.fill);
  rect(Obstacle2.x, Obstacle2.y, Obstacle2.width, Obstacle2.height);
  pop();
}

function drawObstacle3() {
  push();
  noStroke();
  fill(Obstacle3.fill);
  rect(Obstacle3.x, Obstacle3.y, Obstacle3.width, Obstacle3.height);
  pop();
}

function drawObstacle4() {
  push();
  noStroke();
  fill(Obstacle4.fill);
  rect(Obstacle4.x, Obstacle4.y, Obstacle4.width, Obstacle4.height);
  pop();
}

