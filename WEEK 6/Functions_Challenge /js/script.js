/**
 * Functions Challenge
 * Luciana Garcia Cadillo
 * 
 * 
 */

/**
 * Bouncy Ball Ball Bonanza

 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 10
    }
};

const ball2 = {
    x: 100,
    y: 60,
    width: 10,
    height: 10,
    velocity: {
        x: 4,
        y: 9
    }
};


// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

const paddle2 = {
    x: 300,
    y: 35,
    width: 80,
    height: 10


};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    movePaddle2(paddle2)

    moveBall(ball);
    moveBall(ball2);

    handleBounce(ball, paddle);
    handleBounce(ball,paddle2);
    handleBounce(ball2,paddle);
    handleBounce(ball2,paddle2);

    drawPaddle(paddle);
    drawPaddle(paddle2);

    drawBall(ball);
    drawBall(ball2);
    
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {

    paddle.x = mouseX;

}

function movePaddle2(paddle2) {

    paddle2.x = width- mouseX;

}



/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {

    //move the ball horizontally/horizontally
    //add its horizontal velocity to its x position / y position 
    ball.x = ball.x + ball.velocity.x;

    ball.y = ball.y + ball.velocity.y-5;

//toma la posicion actual de la pelota en X y añade su velocidad horizontal 


}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
    
    if(checkOverlap(ball, paddle)){

        ball.velocity.y = ball.velocity.y * -1;
        
    }
    
}



/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}


/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
  return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 &&
          rectA.x - rectA.width/2 < rectB.x + rectB.width/2 &&
          rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}