/**
 * Circle Master
 * Luciana Garcia Cadillo
 * Conditionals Challenge
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#e7bc2f"
};

const puck2 = {
    x: 200,
    y:100,
    size: 100,
    fill: "#e3bb"

};


const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#ffffff"
};


/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#0a064b");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
  drawPuck2();
  movePuck();
  movePuck2()
}

function movePuck () {
    let mousepackdis = dist(puck.x,puck.y, user.x,user.y)

    let overlap = mousepackdis < puck.size/2

    if (overlap === true){
        if (user.y< puck.y){
            puck.y = puck.y+1
        }

        else {
            puck.y= puck.y-1
        }

    if (overlap === true){
        if (user.x< puck.x){
            puck.x = puck.x+1
        }

        else {
            puck.x = puck.x-1
        }
    }     

    }


}

function movePuck2 () {
    let mousepackdis = dist(puck2.x,puck2.y, user.x,user.y)

    let overlap = mousepackdis < puck.size/2

    if (overlap === true){
        if (user.y< puck2.y){
            puck2.y = puck2.y+1
        }

        else {
            puck2.y= puck2.y-1
        }

    if (overlap === true){
        if (user.x< puck2.x){
            puck2.x = puck2.x+1
        }

        else {
            puck2.x = puck2.x-1
        }
    }     

    }


}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function drawPuck2() {
  push();
  noStroke();
  fill(puck2.fill);
  ellipse(puck2.x, puck2.y, puck2.size);
  pop();
}