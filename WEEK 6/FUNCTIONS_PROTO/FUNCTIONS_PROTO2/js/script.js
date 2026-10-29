/**
 * Prototype #2-Lil Bugs 
 * Luciana Garcia Cadillo
 * Inspired by my previous lil bugs sketch, also helped myself with the new arrays challenge 
 * 
 * This prototype explores functions with return values 
 */

// The little bug is fying aound and once you press the mouse it becomes angry, big, and purple. 

"use strict";

let bug1;



function setup() {

    createCanvas (600, 600);

    //Creates the bugs /random (width)- chooses a random horizontal position  /random(height)-chooses a random vertical position
    bug1 = createBug(random (width), random(height));
    


}
//x,y & x:x , y:y es para que el bug pueda aparecer en random positions
function createBug(x,y){
    const newBug = {
        x:x,
        y:y,
        size: 45,
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
    changeBugSize(bug1)
    changeBugFill(bug1)

    if (mouseIsPressed) {

        changeBugSize(bug1, 100);
        changeBugFill(bug1, "#c73ab7")

    }
    else {
        changeBugSize(bug1,45);
        changeBugFill( bug1, "rgb(119, 230, 228)")
    }



}

function changeBugSize(bug, newSize){

    bug.size = newSize;
    

}

function changeBugFill(bug, newFill){

    bug.fill = newFill;
    

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