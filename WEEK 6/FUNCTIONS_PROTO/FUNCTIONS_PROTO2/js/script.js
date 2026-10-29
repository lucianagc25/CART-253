/**
 * Prototype #2-Lil Bugs 
 * Luciana Garcia Cadillo
 * Inspired by my previous lil bugs sketch, also helped myself with the new arrays challenge 
 * 
 * This prototype explores functions with return values 
 */

"use strict";

let bug1;
//let bug2;
//let bug3;


function setup() {

    createCanvas (600, 600);

    //Creates the bugs
    bug1 = createBug();
    //bug2 = createBug();
    //bug3 = createBug();


}

function createBug(){
    const newBug = {
        x:300,
        y:300,
        size: 30,
        fill: "rgb(119, 230, 228)",
        //movement 
        velocity: {
        x: random (-5, 5),
        y: random (-5, 5)
        }
    };

    return newBug;
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background("rgba(234, 173, 19, 0.48)")

    moveBug(bug1)
    bounceBug(bug1)
    drawBug(bug1)



}

//Moves the bug according to its velocity

function moveBug(bug) {
  bug.x += bug.velocity.x;
  bug.y += bug.velocity.y;
}

//Bounces the bug off the walls

function bounceBug(bug) {
  // Check if the ball has reached the left or right
  const bounceX = (bug.x > width || bug.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (bug.y > height || bug.y < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    bug.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    bug.velocity.y *= -1;
  }
}

function drawBug(bug) {
  push();
  noStroke();
  fill(bug.fill);
  rect(bug.x, bug.y, bug.size);
  pop();
}